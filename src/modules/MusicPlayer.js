// MusicPlayer.js - Music app player with Web Audio API canvas visualizer
import { CONFIG } from '../config.js';

export class MusicPlayer {
  constructor(containerEl, notifySystem) {
    this.container = containerEl;
    this.notifier = notifySystem;
    
    this.tracks = CONFIG.musicList;
    this.currentIndex = 0;
    this.audio = new Audio();
    this.audio.crossOrigin = "anonymous"; // Request CORS access for analysis
    
    this.isPlaying = false;
    this.audioCtx = null;
    this.analyser = null;
    this.source = null;
    this.animationId = null;

    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="music-player-container">
        <!-- Metadata -->
        <div class="music-info-block">
          <div class="music-disc" id="music-disc">
            <div class="music-disc-inner"></div>
          </div>
          <div class="music-metadata">
            <div class="music-title" id="track-title">Track Name</div>
            <div class="music-artist" id="track-artist">Artist Info</div>
          </div>
        </div>

        <!-- Waveform Visualizer -->
        <canvas class="music-visualizer-canvas" id="visualizer-canvas"></canvas>

        <!-- Progress Slider -->
        <div class="music-slider-group">
          <span id="curr-time">0:00</span>
          <div class="music-progress-bar" id="music-progress">
            <div class="music-progress-fill" id="music-progress-fill"></div>
          </div>
          <span id="total-time">0:00</span>
        </div>

        <!-- Controls Row -->
        <div class="music-controls">
          <button class="music-btn" id="music-prev" title="Previous Track"><i class="fa-solid fa-backward"></i></button>
          <button class="music-btn play-pause" id="music-play-pause" title="Play / Pause"><i class="fa-solid fa-play"></i></button>
          <button class="music-btn" id="music-next" title="Next Track"><i class="fa-solid fa-forward"></i></button>
        </div>

        <!-- Volume & Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; margin-top: 5px;">
          <div class="music-volume-group">
            <i class="fa-solid fa-volume-low" style="color: var(--text-muted);"></i>
            <input type="range" class="music-volume-slider" id="music-volume" min="0" max="1" step="0.05" value="0.5">
          </div>
          <div style="color: var(--text-muted); font-size: 0.7rem; font-family: var(--font-mono);" id="playlist-index">Track 1 of 3</div>
        </div>
      </div>
    `;

    this.discEl = this.container.querySelector('#music-disc');
    this.titleEl = this.container.querySelector('#track-title');
    this.artistEl = this.container.querySelector('#track-artist');
    this.canvasEl = this.container.querySelector('#visualizer-canvas');
    this.playPauseBtn = this.container.querySelector('#music-play-pause');
    this.progressBar = this.container.querySelector('#music-progress');
    this.progressFill = this.container.querySelector('#music-progress-fill');
    this.currTimeEl = this.container.querySelector('#curr-time');
    this.totalTimeEl = this.container.querySelector('#total-time');
    this.volumeSlider = this.container.querySelector('#music-volume');
    this.indexEl = this.container.querySelector('#playlist-index');

    this.ctx = this.canvasEl.getContext('2d');

    // Bind triggers
    this.playPauseBtn.addEventListener('click', () => this.togglePlay());
    this.container.querySelector('#music-next').addEventListener('click', () => this.nextTrack());
    this.container.querySelector('#music-prev').addEventListener('click', () => this.prevTrack());
    this.volumeSlider.addEventListener('input', () => this.setVolume());
    this.progressBar.addEventListener('mousedown', (e) => this.seekAudio(e));

    // Audio bindings
    this.audio.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.audio.addEventListener('loadedmetadata', () => this.onMetadataLoaded());
    this.audio.addEventListener('ended', () => this.nextTrack());

    // Load first track details
    this.loadTrack(this.currentIndex);
    this.drawFallbackVisuals(); // Start idle visualizer drawing
  }

  loadTrack(idx) {
    this.currentIndex = idx;
    const track = this.tracks[idx];
    
    this.audio.src = track.url;
    this.titleEl.textContent = track.title;
    this.artistEl.textContent = track.artist;
    this.indexEl.textContent = `Track ${idx + 1} of ${this.tracks.length}`;
    
    this.progressFill.style.width = '0%';
    this.currTimeEl.textContent = "0:00";
    this.totalTimeEl.textContent = "0:00";
    this.audio.volume = parseFloat(this.volumeSlider.value);
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.audio.play().then(() => {
      this.isPlaying = true;
      this.playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      this.discEl.classList.add('playing');
      
      // Initialize AudioCtx on user interaction (browser restriction)
      this.initAudioContext();
      this.drawFrequencyVisuals();
      
      this.notifier.pushToast("Music Player", `Playing: ${this.tracks[this.currentIndex].title}`);
    }).catch(err => {
      console.warn("Audio play blocked / failed: ", err);
    });
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    this.discEl.classList.remove('playing');
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.drawFallbackVisuals();
  }

  nextTrack() {
    let nextIdx = (this.currentIndex + 1) % this.tracks.length;
    this.loadTrack(nextIdx);
    if (this.isPlaying) this.play();
  }

  prevTrack() {
    let prevIdx = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
    this.loadTrack(prevIdx);
    if (this.isPlaying) this.play();
  }

  setVolume() {
    this.audio.volume = parseFloat(this.volumeSlider.value);
  }

  seekAudio(e) {
    const rect = this.progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.audio.currentTime = percent * this.audio.duration;
  }

  onTimeUpdate() {
    if (!this.audio.duration) return;
    const current = this.audio.currentTime;
    const duration = this.audio.duration;

    const pct = (current / duration) * 100;
    this.progressFill.style.width = `${pct}%`;

    this.currTimeEl.textContent = this.formatTime(current);
  }

  onMetadataLoaded() {
    this.totalTimeEl.textContent = this.formatTime(this.audio.duration);
  }

  formatTime(secs) {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  }

  initAudioContext() {
    if (this.audioCtx) return;
    
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64; // Small fft size for block visuals
      
      this.source = this.audioCtx.createMediaElementSource(this.audio);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn("Failed to set up MediaElementSource. Probably CORS. Using mathematical visualizer instead.");
      this.analyser = null; // Forces fallback loop
    }
  }

  drawFrequencyVisuals() {
    if (this.animationId) cancelAnimationFrame(this.animationId);

    const draw = () => {
      this.animationId = requestAnimationFrame(draw);
      
      const width = this.canvasEl.width = this.canvasEl.clientWidth;
      const height = this.canvasEl.height = this.canvasEl.clientHeight;
      
      this.ctx.clearRect(0, 0, width, height);

      // If analyser is connected and CORS didn't fail
      if (this.analyser) {
        const bufferLength = this.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        this.analyser.getByteFrequencyData(dataArray);

        const barWidth = (width / bufferLength) * 1.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * height * 0.9;
          
          // Draw neat glassmorphic rounded bars
          this.ctx.fillStyle = `rgba(56, 189, 248, ${0.1 + (barHeight / height) * 0.8})`;
          this.ctx.shadowBlur = 4;
          this.ctx.shadowColor = "var(--primary-color)";
          
          // Bar draw
          this.ctx.fillRect(x, height - barHeight, barWidth - 4, barHeight);
          x += barWidth;
        }
      } else {
        // Fallback: draw animated math frequency waves when playing
        this.drawMathWaves(true);
      }
    };

    draw();
  }

  drawFallbackVisuals() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    
    // Draw slowly undulating flat waves when paused
    const draw = () => {
      this.animationId = requestAnimationFrame(draw);
      this.drawMathWaves(false);
    };
    draw();
  }

  drawMathWaves(isActive) {
    const width = this.canvasEl.width = this.canvasEl.clientWidth;
    const height = this.canvasEl.height = this.canvasEl.clientHeight;
    this.ctx.clearRect(0, 0, width, height);
    
    const count = 16;
    const barWidth = width / count;
    const time = Date.now() * 0.005;

    for (let i = 0; i < count; i++) {
      let amp = isActive ? Math.sin(time + i * 0.5) * 15 + 20 : Math.sin(time * 0.2 + i * 0.2) * 3 + 5;
      if (isActive) amp += Math.cos(time * 0.8 + i) * 6; // make it random looking
      
      const barHeight = Math.max(3, Math.min(height * 0.8, amp));
      
      this.ctx.fillStyle = isActive ? `rgba(56, 189, 248, 0.4)` : `rgba(255, 255, 255, 0.08)`;
      this.ctx.fillRect(i * barWidth, height - barHeight, barWidth - 6, barHeight);
    }
  }

  destroy() {
    this.pause();
    this.audio.src = '';
  }
}
