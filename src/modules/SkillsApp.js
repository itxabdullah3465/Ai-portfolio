// SkillsApp.js - Circular animated progress indicators for Skills
export class SkillsApp {
  constructor(containerEl) {
    this.container = containerEl;
    this.skills = [
      { name: 'Python / AI', level: 85, color: '#3776ab', icon: 'fa-brands fa-python' },
      { name: 'Machine Learning', level: 80, color: '#ff6f00', icon: 'fa-solid fa-brain' },
      { name: 'React.js', level: 90, color: '#61dbfb', icon: 'fa-brands fa-react' },
      { name: 'JavaScript', level: 90, color: '#f1e05a', icon: 'fa-brands fa-square-js' },
      { name: 'Tailwind CSS', level: 92, color: '#38bdf8', icon: 'fa-solid fa-wind' },
      { name: 'Databases', level: 85, color: '#47a248', icon: 'fa-solid fa-database' },
      { name: 'UI/UX Design', level: 88, color: '#f24e1e', icon: 'fa-brands fa-figma' },
      { name: 'HTML & CSS', level: 100, color: '#e34c26', icon: 'fa-brands fa-html5' }
    ];

    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="skills-app-container">
        <h3 class="skills-heading">Technical Expertise</h3>
        <div class="skills-grid-row">
          ${this.skills.map(s => {
            const safeId = s.name.replace(/[^a-zA-Z0-9]/g, '');
            return `
              <div class="skills-box-card">
                <div class="skills-box-icon"><i class="${s.icon}" style="color: ${s.color};"></i></div>
                <div class="skills-radial-wrapper">
                  <svg width="84" height="84" viewBox="0 0 100 100">
                    <!-- Background Circle -->
                    <circle cx="50" cy="50" r="42" fill="transparent" stroke="rgba(255, 255, 255, 0.05)" stroke-width="8"></circle>
                    <!-- Animated Circle -->
                    <circle id="circle-fill-${safeId}" cx="50" cy="50" r="42" fill="transparent" 
                            stroke="${s.color}" stroke-width="8" 
                            stroke-dasharray="263.89" stroke-dashoffset="263.89" 
                            stroke-linecap="round" transform="rotate(-90 50 50)" 
                            style="transition: stroke-dashoffset 1.6s cubic-bezier(0.16, 1, 0.3, 1); filter: drop-shadow(0 0 6px ${s.color}66);"></circle>
                    <!-- Percentage Value -->
                    <text id="circle-txt-${safeId}" x="50" y="55" text-anchor="middle" font-family="var(--font-os)" font-size="14" fill="#fff" font-weight="bold">0%</text>
                  </svg>
                </div>
                <div class="skills-box-label">${s.name}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Start circle fills and counter countups
    setTimeout(() => this.animateSkills(), 200);
  }

  animateSkills() {
    // Circumference C = 2 * PI * r = 2 * 3.14159 * 42 = 263.89
    const circ = 263.89;

    this.skills.forEach(s => {
      const safeId = s.name.replace(/[^a-zA-Z0-9]/g, '');
      const circleEl = this.container.querySelector(`#circle-fill-${safeId}`);
      const textEl = this.container.querySelector(`#circle-txt-${safeId}`);

      if (circleEl && textEl) {
        // Calculate dashoffset
        const offset = circ - (s.level / 100) * circ;
        circleEl.style.strokeDashoffset = offset;

        // Animate counter value
        let count = 0;
        const target = s.level;
        const stepTime = Math.max(10, Math.floor(1200 / target)); // scale speed based on level
        
        const timer = setInterval(() => {
          count++;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          textEl.textContent = `${count}%`;
        }, stepTime);
      }
    });
  }
}
