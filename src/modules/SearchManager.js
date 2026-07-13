// SearchManager.js - Global search indexing & results opening
import { CONFIG } from '../config.js';

export class SearchManager {
  constructor(overlayEl, inputEl, resultsEl, windowManagerInstance) {
    this.overlay = overlayEl;
    this.input = inputEl;
    this.resultsList = resultsEl;
    this.wm = windowManagerInstance;
    this.index = [];
    this.selectedIndex = -1;

    this.buildIndex();
    this.init();
  }

  buildIndex() {
    // 1. Projects
    CONFIG.projects.forEach(p => {
      this.index.push({
        title: p.title,
        desc: p.description,
        category: 'Project',
        icon: 'fa-solid fa-code',
        action: () => window.launchApp('projects')
      });
    });

    // 2. Skills
    CONFIG.skills.forEach(s => {
      this.index.push({
        title: s.name,
        desc: `${s.category} skill with level ${s.level}%`,
        category: 'Skill',
        icon: 'fa-solid fa-chart-line',
        action: () => window.launchApp('skills')
      });
    });

    // 3. Certificates
    CONFIG.certificates.forEach(c => {
      this.index.push({
        title: c.name,
        desc: `Issued by ${c.issuer} in ${c.date}`,
        category: 'Certificate',
        icon: 'fa-solid fa-certificate',
        action: () => window.launchApp('linkedin')
      });
    });

    // 4. Experience
    CONFIG.experience.forEach(exp => {
      this.index.push({
        title: `${exp.role} - ${exp.company}`,
        desc: exp.bullets.join(' '),
        category: 'Experience',
        icon: 'fa-solid fa-briefcase',
        action: () => window.launchApp('linkedin')
      });
    });

    // 5. General apps
    this.index.push({
      title: 'Terminal CLI',
      desc: 'Interactive developer shell interface',
      category: 'System App',
      icon: 'fa-solid fa-terminal',
      action: () => window.launchApp('terminal')
    });

    this.index.push({
      title: 'Music Player',
      desc: 'Listen to premium outrun synthwave tunes',
      category: 'Accessory',
      icon: 'fa-solid fa-music',
      action: () => window.launchApp('music')
    });

    this.index.push({
      title: 'Calculator',
      desc: 'Windows-style scientific arithmetic device',
      category: 'Accessory',
      icon: 'fa-solid fa-calculator',
      action: () => window.launchApp('calculator')
    });
  }

  init() {
    this.input.addEventListener('input', () => this.performSearch());

    this.input.addEventListener('keydown', (e) => {
      const items = this.resultsList.querySelectorAll('.search-result-item');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.selectedIndex = (this.selectedIndex + 1) % items.length;
        this.updateActiveItem(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.selectedIndex = (this.selectedIndex - 1 + items.length) % items.length;
        this.updateActiveItem(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (this.selectedIndex !== -1 && items[this.selectedIndex]) {
          items[this.selectedIndex].click();
        } else if (items[0]) {
          items[0].click();
        }
      }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!this.overlay.contains(e.target) && e.target.id !== 'start-search-trigger') {
        this.closeSearch();
      }
    });
  }

  performSearch() {
    const q = this.input.value.trim().toLowerCase();
    this.resultsList.innerHTML = '';
    this.selectedIndex = -1;

    if (!q) {
      this.resultsList.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin: 40px 0;">
          Search everything (projects, skills, experience...)
        </div>
      `;
      return;
    }

    const matches = this.index.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      this.resultsList.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin: 40px 0;">
          No matching results found.
        </div>
      `;
      return;
    }

    matches.slice(0, 5).forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'search-result-item';
      el.innerHTML = `
        <div class="search-result-icon"><i class="${item.icon}"></i></div>
        <div class="search-result-details">
          <h4>${item.title}</h4>
          <p>${item.category} • ${item.desc.substring(0, 60)}...</p>
        </div>
      `;

      el.addEventListener('click', () => {
        item.action();
        this.closeSearch();
      });

      this.resultsList.appendChild(el);
    });
  }

  updateActiveItem(items) {
    items.forEach((item, idx) => {
      if (idx === this.selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  openSearch() {
    this.overlay.classList.add('open');
    this.input.value = '';
    this.performSearch();
    setTimeout(() => this.input.focus(), 150);
  }

  closeSearch() {
    this.overlay.classList.remove('open');
  }

  getProjectsHtml() {
    return `
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
  }
}
