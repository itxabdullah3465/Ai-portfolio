// DashboardApp.js - Analytics dashboard using animated SVGs and count-up numbers
import { CONFIG } from '../config.js';

export class DashboardApp {
  constructor(containerEl) {
    this.container = containerEl;
    this.counters = [];

    this.init();
  }

  init() {
    // Basic stats count
    const totalProjects = CONFIG.projects.length;
    const completedProjects = CONFIG.projects.filter(p => p.pinned).length; // pinned as completed placeholder
    const ongoingProjects = totalProjects - completedProjects;
    const totalSkills = CONFIG.skills.length;
    const totalCerts = CONFIG.certificates.length;
    const codingHours = 1240;

    this.container.innerHTML = `
      <div class="dashboard-container">
        <!-- Stats Counter Row -->
        <div class="dashboard-stats-grid">
          <div class="stat-card">
            <div class="stat-num" data-val="${totalProjects}">0</div>
            <div class="stat-label">Total Projects</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${completedProjects}">0</div>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${ongoingProjects}">0</div>
            <div class="stat-label">Ongoing</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${totalSkills}">0</div>
            <div class="stat-label">Tech & Skills</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${totalCerts}">0</div>
            <div class="stat-label">Certificates</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" data-val="${codingHours}">0</div>
            <div class="stat-label">Coding Hours</div>
          </div>
        </div>

        <!-- Charts Layout Grid -->
        <div class="dashboard-charts-grid">
          
          <!-- Monthly Learning Progress (Line Chart) -->
          <div class="chart-card">
            <div class="chart-title">Monthly Learning Progress (Self-study Score)</div>
            <div class="chart-container-svg" id="line-chart-box">
              <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none" id="svg-line-chart">
                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--primary-color)" stop-opacity="0.3"></stop>
                    <stop offset="100%" stop-color="var(--primary-color)" stop-opacity="0.00"></stop>
                  </linearGradient>
                </defs>
                <!-- Grid Lines -->
                <line x1="40" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.05)" stroke-width="1"></line>
                <line x1="40" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.05)" stroke-width="1"></line>
                <line x1="40" y1="130" x2="380" y2="130" stroke="rgba(255,255,255,0.05)" stroke-width="1"></line>
                <!-- Graph line will be generated dynamically -->
              </svg>
            </div>
          </div>

          <!-- Project Completion Ratio (Circular Donut Chart) -->
          <div class="chart-card">
            <div class="chart-title">Project Completion Ratio</div>
            <div class="chart-container-svg" style="display: flex; align-items: center; justify-content: center;">
              <svg width="180" height="180" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>
                <circle id="donut-fill" cx="50" cy="50" r="40" fill="transparent" 
                        stroke="var(--accent-color)" stroke-width="10" 
                        stroke-dasharray="251.2" stroke-dashoffset="251.2"
                        stroke-linecap="round" transform="rotate(-90 50 50)" style="transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1); filter: drop-shadow(0 0 5px var(--accent-glow));"></circle>
                <text x="50" y="55" text-anchor="middle" font-family="var(--font-os)" font-size="12" fill="#fff" font-weight="bold">
                  <tspan id="donut-text">0</tspan>%
                </text>
              </svg>
            </div>
          </div>

          <!-- Skills Level breakdown (Top 4 skills) -->
          <div class="chart-card" style="grid-column: span 2;">
            <div class="chart-title">Top Skill Progression Index</div>
            <div id="skills-dashboard-bars" style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
              <!-- Generated dynamically -->
            </div>
          </div>

        </div>
      </div>
    `;

    // Start counter animations
    this.animateCounters();
    
    // Draw charts
    this.drawCharts();
  }

  animateCounters() {
    const els = this.container.querySelectorAll('.stat-num');
    els.forEach(el => {
      const targetVal = parseInt(el.getAttribute('data-val'));
      let curr = 0;
      const step = Math.ceil(targetVal / 50) || 1;
      const timer = setInterval(() => {
        curr += step;
        if (curr >= targetVal) {
          curr = targetVal;
          clearInterval(timer);
        }
        el.textContent = curr.toLocaleString();
      }, 25);
    });
  }

  drawCharts() {
    // 1. Line Chart: Monthly Learning Score
    const scores = [25, 45, 38, 68, 85, 92]; // Jan to Jun scores
    const svg = this.container.querySelector('#svg-line-chart');
    const width = 340; // 380 - 40
    const height = 100; // 130 - 30
    
    // Calculate points coordinates
    const points = scores.map((val, idx) => {
      const x = 40 + (idx * (width / (scores.length - 1)));
      const y = 130 - (val / 100) * height;
      return { x, y };
    });

    // Make smooth bezier path
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpX1 = curr.x + (next.x - curr.x) / 2;
      const cpY1 = curr.y;
      const cpX2 = curr.x + (next.x - curr.x) / 2;
      const cpY2 = next.y;
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }

    // Shadow filled Area path
    const dArea = `${d} L ${points[points.length - 1].x} 130 L 40 130 Z`;

    // Render Area
    const pathArea = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathArea.setAttribute('d', dArea);
    pathArea.setAttribute('fill', 'url(#gradient-line)');
    svg.appendChild(pathArea);

    // Render Main Curve Line
    const pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathLine.setAttribute('d', d);
    pathLine.setAttribute('fill', 'none');
    pathLine.setAttribute('stroke', 'var(--primary-color)');
    pathLine.setAttribute('stroke-width', '3');
    pathLine.setAttribute('stroke-linecap', 'round');
    pathLine.style.filter = 'drop-shadow(0 0 6px var(--primary-glow))';
    
    // Animate line path drawing
    const totalLength = 500; // estimated
    pathLine.setAttribute('stroke-dasharray', totalLength);
    pathLine.setAttribute('stroke-dashoffset', totalLength);
    pathLine.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)';
    
    svg.appendChild(pathLine);
    
    setTimeout(() => {
      pathLine.style.strokeDashoffset = '0';
    }, 100);

    // Render points dots
    points.forEach((p, idx) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', p.x);
      circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '4');
      circle.setAttribute('fill', '#fff');
      circle.setAttribute('stroke', 'var(--primary-color)');
      circle.setAttribute('stroke-width', '2');
      circle.style.cursor = 'pointer';
      
      // Simple tooltip
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = `${months[idx]}: ${scores[idx]}%`;
      circle.appendChild(title);

      svg.appendChild(circle);
    });

    // 2. Circular Donut Chart
    const totalProjects = CONFIG.projects.length;
    const completedProjects = CONFIG.projects.filter(p => p.pinned).length;
    const ratio = Math.round((completedProjects / totalProjects) * 100);
    
    const donutFill = this.container.querySelector('#donut-fill');
    const donutText = this.container.querySelector('#donut-text');
    
    // Circumference = 2 * PI * r = 2 * 3.14159 * 40 = 251.2
    const circ = 251.2;
    const offset = circ - (ratio / 100) * circ;

    setTimeout(() => {
      donutFill.style.strokeDashoffset = offset;
      
      // Countup text
      let curr = 0;
      const textTimer = setInterval(() => {
        if (curr >= ratio) {
          curr = ratio;
          clearInterval(textTimer);
        }
        donutText.textContent = curr;
        curr++;
      }, 15);
    }, 200);

    // 3. Top Skills level bars
    const skillsList = CONFIG.skills.slice(0, 4); // Pick top 4
    const barsContainer = this.container.querySelector('#skills-dashboard-bars');
    
    barsContainer.innerHTML = skillsList.map(s => `
      <div class="skill-bar-row">
        <div class="skill-bar-header">
          <span>${s.icon} ${s.name}</span>
          <span style="font-weight:600; color:var(--primary-color);">${s.level}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" id="bar-${s.name.replace(/[^a-zA-Z]/g, '')}"></div>
        </div>
      </div>
    `).join('');

    // Animate widths
    setTimeout(() => {
      skillsList.forEach(s => {
        const id = `bar-${s.name.replace(/[^a-zA-Z]/g, '')}`;
        const bar = this.container.querySelector(`#${id}`);
        if (bar) bar.style.width = `${s.level}%`;
      });
    }, 150);
  }
}
