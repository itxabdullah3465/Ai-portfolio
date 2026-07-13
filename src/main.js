// main.js - Core OS Bootstrap and Application Coordinator
import { CONFIG } from './config.js';
import { WindowManager } from './modules/WindowManager.js';
import { NotificationSystem } from './modules/NotificationSystem.js';
import { SearchManager } from './modules/SearchManager.js';
import { StickyNotes } from './modules/StickyNotes.js';
import { WeatherWidget } from './modules/WeatherWidget.js';
import { Terminal } from './modules/Terminal.js';
import { GitHubApp } from './modules/GitHubApp.js';
import { LinkedInApp } from './modules/LinkedInApp.js';
import { DashboardApp } from './modules/DashboardApp.js';
import { MusicPlayer } from './modules/MusicPlayer.js';
import { Calculator } from './modules/Calculator.js';
import { SkillsApp } from './modules/SkillsApp.js';

// Global Instances
let wm;
let ns;
let search;
let weather;
let notes;

// ==========================================================================
// 1. BOOT ANIMATION SEQUENCE
// ==========================================================================
function startBootSequence() {
  const bootScreen = document.getElementById('boot-screen');
  const terminal = document.getElementById('boot-terminal');
  const progressBar = document.getElementById('boot-progress-bar');

  const bootLogs = [
    { text: 'BIOS Version 2.0.26 - Check sum: OK', type: 'info' },
    { text: 'CPU: Intel Core WebDev-9000 @ 4.80GHz - 8 Cores', type: 'info' },
    { text: 'Memory Test: 16384MB - OK', type: 'info' },
    { text: 'Disk Search: HDD-0 (OS Partition) - OK', type: 'info' },
    { text: 'Loading Portfolio OS Kernel Modules...', type: 'info' },
    { text: 'Mounting virtual file system /dev/projects... [OK]', type: 'ok' },
    { text: 'Mounting virtual file system /dev/skills... [OK]', type: 'ok' },
    { text: 'Mounting virtual file system /dev/experience... [OK]', type: 'ok' },
    { text: 'Starting Network interface config... [OK]', type: 'ok' },
    { text: 'Fetching Weather Widget services... [OK]', type: 'ok' },
    { text: 'Initializing Graphics adapter (Glassmorphic FX)... [OK]', type: 'ok' },
    { text: 'Pre-compiling SVG dynamic charts compiler... [OK]', type: 'ok' },
    { text: 'Connecting GitHub pipelines API... [OK]', type: 'ok' },
    { text: 'System boot ready. Launching Desktop shell.', type: 'info' }
  ];

  let logIndex = 0;
  const logTimer = setInterval(() => {
    if (logIndex < bootLogs.length) {
      const log = bootLogs[logIndex];
      const el = document.createElement('div');
      el.className = `boot-line ${log.type}`;
      el.textContent = `[ ${new Date().toLocaleTimeString()} ] ${log.text}`;
      terminal.appendChild(el);
      terminal.scrollTop = terminal.scrollHeight;
      
      // Update progress bar
      const pct = Math.round(((logIndex + 1) / bootLogs.length) * 100);
      progressBar.style.width = `${pct}%`;

      logIndex++;
    } else {
      clearInterval(logTimer);
      // Boot done, transition
      setTimeout(() => {
        bootScreen.style.opacity = '0';
        bootScreen.style.transform = 'scale(1.05)';
        setTimeout(() => {
          bootScreen.remove();
          initializeDesktop();
        }, 600);
      }, 500);
    }
  }, 180);
}

// ==========================================================================
// 2. CORE DESKTOP SYSTEM INITIALIZATION
// ==========================================================================
function initializeDesktop() {
  // 1. Instantiations
  ns = new NotificationSystem(
    document.getElementById('notifications-panel'),
    document.getElementById('notifications-list'),
    document.getElementById('toast-container'),
    document.getElementById('tray-bell')
  );

  wm = new WindowManager('taskbar-running-apps', 'windows-container', 'snap-indicator');
  
  search = new SearchManager(
    document.getElementById('global-search-overlay'),
    document.getElementById('global-search-input'),
    document.getElementById('search-results-list'),
    wm
  );

  notes = new StickyNotes(document.getElementById('desktop'), 'quick-action-note');

  // Weather Widget
  const weatherBox = document.getElementById('widget-weather-overlay');
  weather = new WeatherWidget(
    weatherBox.querySelector('#weather-city'),
    weatherBox.querySelector('#weather-temp'),
    weatherBox.querySelector('#weather-desc'),
    weatherBox.querySelector('#weather-icon'),
    weatherBox.querySelector('#weather-humidity'),
    weatherBox.querySelector('#weather-wind'),
    weatherBox.querySelector('#weather-update')
  );

  // 2. Setup profile values
  document.getElementById('start-user-name').textContent = localStorage.getItem('os_user_name') || CONFIG.profile.name;
  document.getElementById('start-user-avatar').src = CONFIG.profile.avatar;

  // 3. Render grid shortcuts
  renderDesktopIcons();

  // 4. Setup menus, clocks, events
  setupStartMenu();
  setupClock();
  setupSystemEvents();
  setupKeyboardShortcuts();
  setupDesktopWallpaper();
  setupNetworkMonitoring();
  setupBatterySync();
  setupSystemCalendar();

  // Welcome Toast Notification
  setTimeout(() => {
    ns.pushNotification("System Alert", `Welcome to Muhammad Abdullah's Desktop Portfolio. Press 'Ctrl + \` ' to launch the Terminal, or double-click any icon to browse.`, "💻");
  }, 1000);
}

// ==========================================================================
// 3. DESKTOP GRID APP DEFINITIONS & RENDERING
// ==========================================================================
const APPS = [
  { id: 'terminal', title: 'Terminal', icon: 'fa-solid fa-terminal', color: '#38bdf8' },
  { id: 'projects', title: 'Projects', icon: 'fa-solid fa-code', color: '#60a5fa' },
  { id: 'analytics', title: 'Analytics', icon: 'fa-solid fa-chart-simple', color: '#a78bfa' },
  { id: 'skills', title: 'Skills', icon: 'fa-solid fa-chart-pie', color: '#38bdf8' },
  { id: 'github', title: 'GitHub', icon: 'fa-brands fa-github', color: '#f8fafc' },
  { id: 'linkedin', title: 'LinkedIn', icon: 'fa-brands fa-linkedin', color: '#0a66c2' },
  { id: 'music', title: 'Music Player', icon: 'fa-solid fa-music', color: '#fb7185' },
  { id: 'calculator', title: 'Calculator', icon: 'fa-solid fa-calculator', color: '#fbbf24' },
  { id: 'settings', title: 'Settings', icon: 'fa-solid fa-gear', color: '#94a3b8' },
  { id: 'changelog', title: "What's New", icon: 'fa-solid fa-bullhorn', color: '#34d399' }
];

function renderDesktopIcons() {
  const grid = document.getElementById('desktop-icons-grid');
  grid.innerHTML = '';

  APPS.forEach(app => {
    const icon = document.createElement('div');
    icon.className = 'desktop-icon';
    icon.setAttribute('data-app', app.id);
    
    icon.innerHTML = `
      <div class="icon-wrapper">
        <i class="${app.icon}" style="color: ${app.color};"></i>
      </div>
      <div class="icon-label">${app.title}</div>
    `;

    // Click handler (single click selection)
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      grid.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
    });

    // Double click to launch App window
    icon.addEventListener('dblclick', () => {
      launchApp(app.id);
    });

    grid.appendChild(icon);
  });

  // Click desktop clears selection
  document.getElementById('desktop').addEventListener('click', (e) => {
    if (!e.target.closest('.desktop-icon')) {
      grid.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
    }
  });
}

// Launch application inside WindowManager
window.launchApp = launchApp;
function launchApp(appId) {
  const app = APPS.find(a => a.id === appId);
  if (!app) return;

  let contentHtml = '';
  let windowEl = null;

  switch (appId) {
    case 'terminal':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      new Terminal(windowEl.querySelector('.window-content'), wm);
      break;

    case 'projects':
      // Build static lists of projects with repository cards
      contentHtml = `
        <div style="padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
          ${CONFIG.projects.map(p => `
            <div class="repo-card" style="height: auto; min-height: 310px; display: flex; flex-direction: column;">
              <div class="card-image-banner" style="background-image: url('${p.image}');"></div>
              <div style="padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="repo-title" style="cursor: pointer;" onclick="window.open('${p.liveUrl}', '_blank')">${p.title}</div>
                  <div class="repo-desc">${p.description}</div>
                  <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 12px;">
                    ${p.tech.map(t => `<span style="font-size:0.65rem; background:rgba(255,255,255,0.05); padding: 2px 6px; border-radius:4px; color:var(--primary-color);">${t}</span>`).join('')}
                  </div>
                </div>
                <div class="repo-footer" style="margin-top: 10px;">
                  <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-regular fa-star"></i> ${p.stars} Stars</span>
                  <div style="display: flex; gap: 6px;">
                    <button class="btn-linkedin-secondary" style="padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; border-color: rgba(255,255,255,0.1);" onclick="window.open('${p.url}', '_blank')" title="View GitHub Code">
                      <i class="fa-brands fa-github"></i> Code
                    </button>
                    <button class="btn-github-profile" style="padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; margin-top:0;" onclick="window.open('${p.liveUrl}', '_blank')" title="Launch Netlify Live Demo">
                      <i class="fa-solid fa-rocket"></i> Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      wm.createWindow(appId, app.title, contentHtml, app.icon);
      break;

    case 'github':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      new GitHubApp(windowEl.querySelector('.window-content'), ns);
      break;

    case 'linkedin':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      new LinkedInApp(windowEl.querySelector('.window-content'), ns);
      break;

    case 'analytics':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      new DashboardApp(windowEl.querySelector('.window-content'));
      break;

    case 'skills':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      windowEl.style.width = '480px';
      windowEl.style.height = '340px';
      new SkillsApp(windowEl.querySelector('.window-content'));
      break;

    case 'music':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      // Music Player window is specific size
      windowEl.style.width = '300px';
      windowEl.style.height = '340px';
      new MusicPlayer(windowEl.querySelector('.window-content'), ns);
      break;

    case 'calculator':
      windowEl = wm.createWindow(appId, app.title, '', app.icon);
      windowEl.style.width = '320px';
      windowEl.style.height = '420px';
      new Calculator(windowEl.querySelector('.window-content'));
      break;

    case 'settings':
      launchSettingsApp();
      break;

    case 'changelog':
      // What's New version release details
      contentHtml = `
        <div class="changelog-container">
          ${CONFIG.changelog.map(log => `
            <div class="changelog-item">
              <div class="changelog-header-row">
                <span class="changelog-badge">v${log.version}</span>
                <span class="changelog-date">${log.date}</span>
              </div>
              
              ${log.features ? `
                <div class="changelog-group">
                  <div class="changelog-group-title add">Added Features</div>
                  <ul class="changelog-list">
                    ${log.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

              ${log.improvements ? `
                <div class="changelog-group">
                  <div class="changelog-group-title imp">Improvements</div>
                  <ul class="changelog-list">
                    ${log.improvements.map(i => `<li>${i}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

              ${log.fixes ? `
                <div class="changelog-group">
                  <div class="changelog-group-title fix">Bug Fixes</div>
                  <ul class="changelog-list">
                    ${log.fixes.map(fx => `<li>${fx}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
      wm.createWindow(appId, app.title, contentHtml, app.icon);
      break;
  }
}

// ==========================================================================
// 4. SETTINGS APP IMPLEMENTATION
// ==========================================================================
function launchSettingsApp() {
  const contentHtml = `
    <div class="settings-container">
      <!-- Theme Options -->
      <div class="settings-section">
        <h3>Theme Customization</h3>
        <div class="settings-grid">
          <div class="settings-row">
            <div>
              <strong>Visual Theme</strong>
              <div class="settings-desc">Choose styling profiles (glassmorphism/cyberpunk).</div>
            </div>
            <div class="theme-options">
              <button class="theme-btn theme-choice-btn" id="theme-btn-dark">Dark Glass</button>
              <button class="theme-btn theme-choice-btn" id="theme-btn-light">Light Glass</button>
              <button class="theme-btn theme-choice-btn" id="theme-btn-cyber">Cyberpunk</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Wallpaper Options -->
      <div class="settings-section">
        <h3>Desktop Wallpaper</h3>
        <div class="settings-grid">
          <div class="settings-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
            <div>
              <strong>Animated Effects</strong>
              <div class="settings-desc">Run dynamic canvas visualizer scripts.</div>
            </div>
            <div class="wallpaper-options" style="display: flex; gap: 6px; flex-wrap: wrap; width: 100%;">
              <button class="theme-btn wall-btn" data-wallpaper="particles" style="flex:1; min-width:70px; padding: 6px;">Particles</button>
              <button class="theme-btn wall-btn" data-wallpaper="matrix" style="flex:1; min-width:70px; padding: 6px;">Matrix</button>
              <button class="theme-btn wall-btn" data-wallpaper="grid" style="flex:1; min-width:70px; padding: 6px;">3D Grid</button>
              <button class="theme-btn wall-btn" data-wallpaper="aurora" style="flex:1; min-width:70px; padding: 6px;">Aurora</button>
            </div>
          </div>
          
          <div class="settings-row" style="flex-direction: column; align-items: flex-start; gap: 8px; margin-top: 10px;">
            <div>
              <strong>Premium Dark Wallpapers</strong>
              <div class="settings-desc">Sleek high-res photography backdrops.</div>
            </div>
            <div class="wallpaper-options" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; width: 100%;">
              <button class="theme-btn wall-btn" data-wallpaper="wall_forest" style="padding: 6px; font-size: 0.75rem;">Moody Forest</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_tokyo" style="padding: 6px; font-size: 0.75rem;">Tokyo Street</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_nebula" style="padding: 6px; font-size: 0.75rem;">Nebula Space</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_waves" style="padding: 6px; font-size: 0.75rem;">Abstract Wave</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_obsidian" style="padding: 6px; font-size: 0.75rem;">Black Wave</button>
              <button class="theme-btn wall-btn" data-wallpaper="wall_twilight" style="padding: 6px; font-size: 0.75rem;">Twilight Trees</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Configurable Developer details -->
      <div class="settings-section">
        <h3>Developer Profile Configuration</h3>
        <div class="settings-grid">
          <div class="settings-row">
            <div>
              <strong>Profile Name</strong>
              <div class="settings-desc">Display developer name on boot/start.</div>
            </div>
            <input type="text" class="settings-input" id="settings-username" value="${localStorage.getItem('os_user_name') || CONFIG.profile.name}">
          </div>

          <div class="settings-row">
            <div>
              <strong>GitHub Username</strong>
              <div class="settings-desc">Source API feeds for profile cards.</div>
            </div>
            <input type="text" class="settings-input" id="settings-github" value="${localStorage.getItem('os_github_username') || CONFIG.profile.github}">
          </div>

          <div class="settings-row">
            <div>
              <strong>LinkedIn URL</strong>
              <div class="settings-desc">Redirect social buttons click.</div>
            </div>
            <input type="text" class="settings-input" id="settings-linkedin" value="${localStorage.getItem('os_linkedin_url') || CONFIG.profile.linkedin}">
          </div>
        </div>
      </div>

      <!-- General System Options -->
      <div class="settings-section">
        <h3>System Settings</h3>
        <div class="settings-grid">
          <div class="settings-row">
            <div>
              <strong>Sound FX</strong>
              <div class="settings-desc">Enable subtle synthetic system sound effects.</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="settings-sound-switch" checked>
              <span class="slider-toggle"></span>
            </label>
          </div>
          
          <div class="settings-row">
            <div>
              <strong>Custom Cursor Follower</strong>
              <div class="settings-desc">Enable smooth custom magnetic cursor ring.</div>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" id="settings-cursor-switch" checked>
              <span class="slider-toggle"></span>
            </label>
          </div>
        </div>
      </div>
      
      <button class="btn-github-profile" id="settings-save-btn" style="width: 100%; text-align: center; justify-content: center; padding: 10px;">
        <i class="fa-solid fa-floppy-disk"></i> Save & Apply Changes
      </button>
    </div>
  `;

  const windowEl = wm.createWindow('settings', 'Settings', contentHtml, 'fa-solid fa-gear');
  windowEl.style.width = '450px';
  windowEl.style.height = '600px';

  // Bind settings listeners
  const contentEl = windowEl.querySelector('.window-content');
  
  // Theme updates
  const setAttrTheme = (themeName) => {
    document.documentElement.removeAttribute('data-theme');
    if (themeName !== 'dark') {
      document.documentElement.setAttribute('data-theme', themeName);
    }
    // Update active state in buttons
    contentEl.querySelectorAll('.theme-choice-btn').forEach(btn => btn.classList.remove('active'));
  };

  contentEl.querySelector('#theme-btn-dark').addEventListener('click', (e) => {
    setAttrTheme('dark');
    e.target.classList.add('active');
    localStorage.setItem('os_theme', 'dark');
  });
  contentEl.querySelector('#theme-btn-light').addEventListener('click', (e) => {
    setAttrTheme('light');
    e.target.classList.add('active');
    localStorage.setItem('os_theme', 'light');
  });
  contentEl.querySelector('#theme-btn-cyber').addEventListener('click', (e) => {
    setAttrTheme('cyberpunk');
    e.target.classList.add('active');
    localStorage.setItem('os_theme', 'cyberpunk');
  });

  // Wallpaper updates
  const setWallpaperMode = (mode) => {
    localStorage.setItem('os_wallpaper', mode);
    contentEl.querySelectorAll('.wall-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-wallpaper') === mode) {
        btn.classList.add('active');
      }
    });
    setupDesktopWallpaper();
  };

  contentEl.querySelectorAll('.wall-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-wallpaper');
      setWallpaperMode(mode);
    });
  });

  // Set active wallpaper button
  const currWall = localStorage.getItem('os_wallpaper') || 'particles';
  contentEl.querySelectorAll('.wall-btn').forEach(btn => {
    if (btn.getAttribute('data-wallpaper') === currWall) {
      btn.classList.add('active');
    }
  });

  // Set active class on initial load inside Settings
  const currTheme = localStorage.getItem('os_theme') || 'dark';
  if (currTheme === 'light') contentEl.querySelector('#theme-btn-light').classList.add('active');
  else if (currTheme === 'cyberpunk') contentEl.querySelector('#theme-btn-cyber').classList.add('active');
  else contentEl.querySelector('#theme-btn-dark').classList.add('active');

  // Switch sound toggle
  const soundSwitch = contentEl.querySelector('#settings-sound-switch');
  soundSwitch.checked = localStorage.getItem('os_sound_enabled') !== 'false';

  // Switch cursor follower toggle
  const cursorSwitch = contentEl.querySelector('#settings-cursor-switch');
  const cursorFollower = document.getElementById('custom-cursor-follower');
  const cursorDot = document.getElementById('custom-cursor');
  cursorSwitch.checked = localStorage.getItem('os_cursor_enabled') !== 'false';

  // Save profile button click
  contentEl.querySelector('#settings-save-btn').addEventListener('click', () => {
    const newName = contentEl.querySelector('#settings-username').value.trim();
    const newGithub = contentEl.querySelector('#settings-github').value.trim();
    const newLinkedin = contentEl.querySelector('#settings-linkedin').value.trim();

    if (newName) {
      localStorage.setItem('os_user_name', newName);
      document.getElementById('start-user-name').textContent = newName;
    }
    if (newGithub) localStorage.setItem('os_github_username', newGithub);
    if (newLinkedin) localStorage.setItem('os_linkedin_url', newLinkedin);

    // Save toggles
    localStorage.setItem('os_sound_enabled', soundSwitch.checked);
    localStorage.setItem('os_cursor_enabled', cursorSwitch.checked);

    if (cursorSwitch.checked) {
      cursorFollower.style.display = 'block';
      cursorDot.style.display = 'block';
    } else {
      cursorFollower.style.display = 'none';
      cursorDot.style.display = 'none';
    }

    ns.pushNotification("Settings", "System profile adjustments saved successfully!", "⚙️");
    wm.closeWindow('settings');
  });
}

// ==========================================================================
// 5. START MENU, TRASH, SYSTEM CLOCK & GENERAL SHELL EVENTS
// ==========================================================================
function setupStartMenu() {
  const startBtn = document.getElementById('btn-start');
  const startMenu = document.getElementById('start-menu');
  const searchTrigger = document.getElementById('start-search-trigger');

  // Toggle Start Menu
  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.toggle('open');
  });

  // Open search clicking the mock start menu search input
  searchTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.remove('open');
    search.openSearch();
  });

  // Populate Start Pinned Shortcuts
  const pinnedGrid = document.getElementById('start-pinned-grid');
  pinnedGrid.innerHTML = APPS.map(app => `
    <div class="start-pinned-item" data-app="${app.id}">
      <div class="icon"><i class="${app.icon}" style="color: ${app.color};"></i></div>
      <div class="label">${app.title}</div>
    </div>
  `).join('');

  pinnedGrid.querySelectorAll('.start-pinned-item').forEach(item => {
    item.addEventListener('click', () => {
      startMenu.classList.remove('open');
      launchApp(item.getAttribute('data-app'));
    });
  });

  // Populate Quick Actions list in Start Menu
  const recentList = document.getElementById('start-recent-list');
  const quickActions = [
    { title: 'Launch Terminal', action: () => launchApp('terminal') },
    { title: 'View Analytics', action: () => launchApp('analytics') },
    { title: 'Download Resume PDF', action: () => window.open(CONFIG.profile.resumeUrl, '_blank') },
    { title: 'Create Sticky Note', action: () => notes.createNewNote() }
  ];

  recentList.innerHTML = quickActions.map((qa, idx) => `
    <div class="start-recent-item" data-idx="${idx}">
      <i class="fa-solid fa-bolt" style="color: var(--primary-color); margin-right: 4px;"></i>
      <span>${qa.title}</span>
    </div>
  `).join('');

  recentList.querySelectorAll('.start-recent-item').forEach(item => {
    item.addEventListener('click', () => {
      startMenu.classList.remove('open');
      quickActions[parseInt(item.getAttribute('data-idx'))].action();
    });
  });

  // Shut down restart power option
  document.getElementById('start-power-btn').addEventListener('click', () => {
    startMenu.classList.remove('open');
    if (confirm("Are you sure you want to reboot Portfolio OS?")) {
      document.body.innerHTML = `
        <div class="boot-screen" style="z-index:99999; justify-content:center;">
          <div class="boot-logo" style="margin-bottom:10px;">REBOOTING SYSTEM</div>
          <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--text-secondary);">Shutting down interfaces... Done.</div>
          <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--text-secondary); margin-top:5px;">Restarting kernel loops...</div>
        </div>
      `;
      setTimeout(() => window.location.reload(), 1500);
    }
  });

  // Close start menu clicking outside
  document.addEventListener('click', (e) => {
    if (!startMenu.contains(e.target) && e.target.id !== 'btn-start') {
      startMenu.classList.remove('open');
    }
  });
}

function setupClock() {
  const timeEl = document.getElementById('clock-time');
  const dateEl = document.getElementById('clock-date');
  const trayTime = document.getElementById('tray-time');
  const trayDate = document.getElementById('tray-date');

  function update() {
    const now = new Date();
    
    // Desktop Widget Clock
    timeEl.textContent = now.toLocaleTimeString([], { hour12: false });
    dateEl.textContent = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    // Taskbar Tray Clock
    trayTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    trayDate.textContent = `${m}/${d}/${y}`;
  }

  update();
  setInterval(update, 1000);
}

function setupSystemEvents() {
  // Volume mute/toggle
  const volIcon = document.getElementById('tray-volume');
  let isMuted = false;
  volIcon.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
      volIcon.className = 'fa-solid fa-volume-xmark tray-icon';
      localStorage.setItem('os_sound_enabled', 'false');
      ns.pushToast("Audio Status", "System sounds muted");
    } else {
      volIcon.className = 'fa-solid fa-volume-high tray-icon';
      localStorage.setItem('os_sound_enabled', 'true');
      ns.pushToast("Audio Status", "System sounds enabled");
    }
  });

  // Magnetic cursor rings follower tracking
  const cursorFollower = document.getElementById('custom-cursor-follower');
  const cursorDot = document.getElementById('custom-cursor');
  const mouseGlow = document.getElementById('mouse-glow');

  const cursorEnabled = localStorage.getItem('os_cursor_enabled') !== 'false';
  if (!cursorEnabled) {
    cursorFollower.style.display = 'none';
    cursorDot.style.display = 'none';
  }

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    if (cursorEnabled) {
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;

      // Follower has slight elastic delay (magnetic)
      cursorFollower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    // Move radial mouse background spotlight
    mouseGlow.style.left = `${x}px`;
    mouseGlow.style.top = `${y}px`;
  });

  // Magnetic hover scaling
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('button') || e.target.closest('.desktop-icon') || e.target.closest('a') || e.target.closest('.start-pinned-item')) {
      cursorFollower.style.width = '38px';
      cursorFollower.style.height = '38px';
      cursorFollower.style.borderColor = 'var(--primary-color)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('button') || e.target.closest('.desktop-icon') || e.target.closest('a') || e.target.closest('.start-pinned-item')) {
      cursorFollower.style.width = '24px';
      cursorFollower.style.height = '24px';
      cursorFollower.style.borderColor = 'var(--secondary-color)';
    }
  });

  // Taskbar Pinned Icons opening triggers
  document.querySelectorAll('.taskbar-pinned-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const app = icon.getAttribute('data-app');
      // If github or linkedin icons clicked in taskbar, open directly in external browser as requested by LinkedIn / GitHub guides
      if (app === 'github') {
        window.open(`https://github.com/${localStorage.getItem('os_github_username') || CONFIG.profile.github}`, '_blank');
        ns.pushToast("External Redirect", "Opening GitHub Profile in default browser...");
      } else if (app === 'linkedin') {
        window.open(localStorage.getItem('os_linkedin_url') || CONFIG.profile.linkedin, '_blank');
        ns.pushToast("External Redirect", "Opening LinkedIn Profile in default browser...");
      } else {
        launchApp(app);
      }
    });
  });

  // Sync localStorage defaults with CONFIG values for first load of new profile edits
  if (!localStorage.getItem('os_config_synced_v3')) {
    localStorage.removeItem('os_user_name');
    localStorage.removeItem('os_github_username');
    localStorage.removeItem('os_linkedin_url');
    localStorage.setItem('os_config_synced_v3', 'true');
  }

  // Setup theme attributes on page launch
  const theme = localStorage.getItem('os_theme') || 'dark';
  if (theme !== 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// ==========================================================================
// 6. GLOBAL SHORTCUTS HANDLERS
// ==========================================================================
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Esc: Close Active window
    if (e.key === 'Escape') {
      if (wm.activeWindow) {
        const appId = wm.activeWindow.getAttribute('data-app');
        wm.closeWindow(appId);
      }
      search.closeSearch();
    }
    
    // F11: Fullscreen
    if (e.key === 'F11') {
      // Allow default F11 browser scaling behavior
    }

    // Ctrl combinations
    if (e.ctrlKey) {
      switch (e.key.toLowerCase()) {
        case '`': // Ctrl + ` : Toggle terminal console
          e.preventDefault();
          launchApp('terminal');
          break;
        case 't': // Ctrl + T : Terminal App window
          e.preventDefault();
          launchApp('terminal');
          break;
        case 'p': // Ctrl + P : Projects App window
          e.preventDefault();
          launchApp('projects');
          break;
        case 'g': // Ctrl + G : GitHub Profile App
          e.preventDefault();
          launchApp('github');
          break;
        case 'l': // Ctrl + L : LinkedIn app section
          e.preventDefault();
          launchApp('linkedin');
          break;
        case 'r': // Ctrl + R : Download CV PDF
          e.preventDefault();
          window.open(CONFIG.profile.resumeUrl, '_blank');
          ns.pushToast("Resume CV", "Initiating Resume PDF download...");
          break;
        case 's': // Ctrl + S : Settings App window
          e.preventDefault();
          launchApp('settings');
          break;
        case 'f': // Ctrl + F : Global Launcher search
          e.preventDefault();
          search.openSearch();
          break;
      }
    }
  });
}

// ==========================================================================
// 7. CANVAS DYNAMIC WALLPAPER ENGINES
// ==========================================================================
let activeWallpaperLoop = null;

function setupDesktopWallpaper() {
  const canvas = document.getElementById('particles-canvas');
  const desktop = document.getElementById('desktop');
  if (!canvas || !desktop) return;
  const ctx = canvas.getContext('2d');
  
  // Clean classes & active loops
  desktop.classList.remove('wallpaper-space', 'wallpaper-aurora');
  desktop.style.backgroundImage = '';
  if (activeWallpaperLoop) {
    cancelAnimationFrame(activeWallpaperLoop);
    activeWallpaperLoop = null;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const WALLPAPER_PRESETS = {
    wall_forest: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1920&q=80',
    wall_tokyo: 'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=1920&q=80',
    wall_nebula: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80',
    wall_waves: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1920&q=80',
    wall_obsidian: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1920&q=80',
    wall_twilight: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80'
  };

  const mode = localStorage.getItem('os_wallpaper') || 'particles';
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.removeEventListener('resize', handleResize);
  window.addEventListener('resize', handleResize);

  if (mode in WALLPAPER_PRESETS) {
    desktop.style.backgroundImage = `radial-gradient(circle, rgba(15, 23, 42, 0.45) 0%, rgba(11, 15, 25, 0.9) 100%), url('${WALLPAPER_PRESETS[mode]}')`;
    desktop.style.backgroundRepeat = 'no-repeat';
    desktop.style.backgroundPosition = 'center center';
    desktop.style.backgroundSize = 'cover';
    return;
  }
  if (mode === 'space') {
    desktop.classList.add('wallpaper-space');
    return;
  }
  if (mode === 'aurora') {
    desktop.classList.add('wallpaper-aurora');
    return;
  }

  // Mouse interactives
  const mouse = { x: null, y: null, radius: 120 };
  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  const handleMouseOut = () => {
    mouse.x = null;
    mouse.y = null;
  };
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseout', handleMouseOut);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseout', handleMouseOut);

  // 1. PARTICLES ENGINE
  if (mode === 'particles') {
    const particles = [];
    const particleCount = 75;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 4;
            p.y += Math.sin(angle) * force * 4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }
      activeWallpaperLoop = requestAnimationFrame(drawParticles);
    };
    drawParticles();
  }

  // 2. NEON MATRIX ENGINE
  else if (mode === 'matrix') {
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&%*+=-";

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      activeWallpaperLoop = requestAnimationFrame(drawMatrix);
    };
    drawMatrix();
  }

  // 3. 3D CYBERPUNK GRID ENGINE
  else if (mode === 'grid') {
    let speed = 0;
    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.15)';
      ctx.lineWidth = 1;

      const horizon = height * 0.45;
      const verticalLines = 30;

      for (let i = -verticalLines; i <= verticalLines; i++) {
        const xOffset = i * (width / 15);
        ctx.beginPath();
        ctx.moveTo(width / 2, horizon);
        ctx.lineTo(width / 2 + xOffset, height);
        ctx.stroke();
      }

      speed = (speed + 0.8) % 40;
      let y = horizon;
      while (y < height) {
        const progress = (y - horizon) / (height - horizon);
        const yPos = horizon + (progress * progress) * (height - horizon) + (speed * progress);
        
        if (yPos > horizon && yPos < height) {
          ctx.beginPath();
          ctx.moveTo(0, yPos);
          ctx.lineTo(width, yPos);
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.05 + progress * 0.25})`;
          ctx.stroke();
        }
        y += 25;
      }

      activeWallpaperLoop = requestAnimationFrame(drawGrid);
    };
    drawGrid();
  }
}

// ==========================================================================
// 8. WIFI, BATTERY & SYSTEM CALENDAR LOGIC
// ==========================================================================
function setupNetworkMonitoring() {
  const wifiIcon = document.getElementById('tray-wifi');
  if (!wifiIcon) return;

  function update() {
    if (navigator.onLine) {
      wifiIcon.className = 'fa-solid fa-wifi tray-icon connected';
      wifiIcon.title = 'Wi-Fi: Connected';
    } else {
      wifiIcon.className = 'fa-solid fa-wifi-slash tray-icon disconnected';
      wifiIcon.title = 'Wi-Fi: Disconnected';
      ns.pushToast("Network Offline", "Connection lost! OS is running in offline mode.", "⚠️");
    }
  }

  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

function setupBatterySync() {
  const parent = document.getElementById('tray-battery-parent');
  const icon = document.getElementById('tray-battery-icon');
  const levelText = document.getElementById('tray-battery-level');
  if (!parent || !icon || !levelText) return;

  function updateDisplay(battery) {
    const pct = Math.round(battery.level * 100);
    levelText.textContent = `${pct}%`;
    parent.title = `Battery: ${pct}% ${battery.charging ? '(Charging)' : '(Discharging)'}`;

    // Charging state styling
    if (battery.charging) {
      parent.classList.add('charging');
      icon.className = 'fa-solid fa-battery-charging tray-icon';
    } else {
      parent.classList.remove('charging');
      
      // Select appropriate icon
      if (pct > 90) icon.className = 'fa-solid fa-battery-full tray-icon';
      else if (pct > 65) icon.className = 'fa-solid fa-battery-three-quarters tray-icon';
      else if (pct > 35) icon.className = 'fa-solid fa-battery-half tray-icon';
      else if (pct > 15) {
        icon.className = 'fa-solid fa-battery-quarter tray-icon';
        parent.classList.remove('low');
      } else {
        icon.className = 'fa-solid fa-battery-empty tray-icon';
        parent.classList.add('low');
      }
    }
  }

  if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
      updateDisplay(battery);
      battery.addEventListener('levelchange', () => updateDisplay(battery));
      battery.addEventListener('chargingchange', () => updateDisplay(battery));
    });
  } else {
    // Fallback if unsupported (mock battery)
    updateDisplay({ level: 1.0, charging: true });
  }
}

function setupSystemCalendar() {
  const clockTray = document.getElementById('tray-clock');
  const calPanel = document.getElementById('system-calendar-panel');
  const monthYearEl = document.getElementById('cal-month-year');
  const daysGrid = document.getElementById('calendar-days-grid');
  const prevBtn = document.getElementById('cal-prev-month');
  const nextBtn = document.getElementById('cal-next-month');
  
  const dateLabel = document.getElementById('calendar-selected-date-label');
  const noteInput = document.getElementById('calendar-note-input');

  if (!clockTray || !calPanel || !monthYearEl || !daysGrid) return;

  let dateObj = new Date();
  let currYear = dateObj.getFullYear();
  let currMonth = dateObj.getMonth();
  let selectedDate = new Date();

  const getNotes = () => JSON.parse(localStorage.getItem('os_calendar_notes')) || {};
  const saveNotes = (notes) => localStorage.setItem('os_calendar_notes', JSON.stringify(notes));

  clockTray.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('notifications-panel').classList.remove('open');
    document.getElementById('start-menu').classList.remove('open');
    calPanel.classList.toggle('open');
    if (calPanel.classList.contains('open')) {
      renderCalendar();
      selectDate(new Date());
    }
  });

  document.addEventListener('click', (e) => {
    if (!calPanel.contains(e.target) && !clockTray.contains(e.target)) {
      calPanel.classList.remove('open');
    }
  });

  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function renderCalendar() {
    daysGrid.innerHTML = '';
    
    monthYearEl.textContent = `${monthsList[currMonth]} ${currYear}`;

    const firstDay = new Date(currYear, currMonth, 1).getDay();
    const lastDate = new Date(currYear, currMonth + 1, 0).getDate();
    const prevLastDate = new Date(currYear, currMonth, 0).getDate();

    const notes = getNotes();
    const today = new Date();

    for (let i = firstDay; i > 0; i--) {
      const dayVal = prevLastDate - i + 1;
      const prevMonthIdx = currMonth === 0 ? 11 : currMonth - 1;
      const prevYearIdx = currMonth === 0 ? currYear - 1 : currYear;
      createDayCell(dayVal, prevMonthIdx, prevYearIdx, true, notes, today);
    }

    for (let i = 1; i <= lastDate; i++) {
      createDayCell(i, currMonth, currYear, false, notes, today);
    }

    const totalCells = daysGrid.children.length;
    const remaining = 42 - totalCells;
    for (let i = 1; i <= remaining; i++) {
      const nextMonthIdx = currMonth === 11 ? 0 : currMonth + 1;
      const nextYearIdx = currMonth === 11 ? currYear + 1 : currYear;
      createDayCell(i, nextMonthIdx, nextYearIdx, true, notes, today);
    }
  }

  function createDayCell(day, m, y, isOtherMonth, notes, today) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day';
    cell.textContent = day;

    if (isOtherMonth) cell.classList.add('other-month');

    if (day === today.getDate() && m === today.getMonth() && y === today.getFullYear()) {
      cell.classList.add('current-day');
    }

    if (selectedDate && day === selectedDate.getDate() && m === selectedDate.getMonth() && y === selectedDate.getFullYear()) {
      cell.classList.add('selected-day');
    }

    const dateStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (notes[dateStr]) {
      cell.classList.add('has-note');
    }

    cell.addEventListener('click', () => {
      selectedDate = new Date(y, m, day);
      renderCalendar();
      selectDate(selectedDate);
    });

    cell.addEventListener('dblclick', () => {
      noteInput.focus();
    });

    daysGrid.appendChild(cell);
  }

  function selectDate(date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    const dateStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    
    dateLabel.textContent = date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    
    const notes = getNotes();
    noteInput.value = notes[dateStr] || '';
  }

  noteInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = noteInput.value.trim();
      const y = selectedDate.getFullYear();
      const m = selectedDate.getMonth();
      const d = selectedDate.getDate();
      const dateStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      
      const notes = getNotes();
      
      if (val) {
        notes[dateStr] = val;
        ns.pushToast("Calendar Note", `Saved note for ${dateLabel.textContent}`);
      } else {
        delete notes[dateStr];
        ns.pushToast("Calendar Note", `Removed note for ${dateLabel.textContent}`);
      }

      saveNotes(notes);
      renderCalendar();
      noteInput.blur();
    }
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currMonth--;
    if (currMonth < 0) {
      currMonth = 11;
      currYear--;
    }
    renderCalendar();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currMonth++;
    if (currMonth > 11) {
      currMonth = 0;
      currYear++;
    }
    renderCalendar();
  });
}

// Bootstrap execution launcher
document.addEventListener('DOMContentLoaded', () => {
  startBootSequence();
});
