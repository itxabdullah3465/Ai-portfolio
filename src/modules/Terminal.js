// Terminal.js - Interactive Developer Terminal
import { CONFIG } from '../config.js';

export class Terminal {
  constructor(containerEl, windowManagerInstance) {
    this.container = containerEl;
    this.wm = windowManagerInstance;
    this.history = [];
    this.historyIndex = -1;
    this.commands = [
      'help', 'about', 'projects', 'skills', 'certificates', 
      'experience', 'resume', 'contact', 'github', 'linkedin', 
      'gallery', 'achievements', 'services', 'education', 
      'clear', 'date', 'time', 'whoami', 'version', 'exit'
    ];

    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="terminal-app" id="terminal-app">
        <div class="terminal-history" id="terminal-history">
          <div class="terminal-line terminal-welcome-text">Welcome to Portfolio OS v2.0 Interactive Developer Terminal.
Type 'help' to see list of available commands.</div>
        </div>
        <div class="terminal-prompt-line">
          <span class="terminal-prompt">></span>
          <div class="terminal-input-wrapper">
            <input type="text" class="terminal-input" id="terminal-input" autofocus autocomplete="off" spellcheck="false">
            <span class="terminal-custom-cursor" id="terminal-cursor"></span>
          </div>
        </div>
      </div>
    `;

    this.historyEl = this.container.querySelector('#terminal-history');
    this.inputEl = this.container.querySelector('#terminal-input');
    this.cursorEl = this.container.querySelector('#terminal-cursor');
    this.appEl = this.container.querySelector('#terminal-app');

    // Focus input on clicking anywhere in terminal
    this.appEl.addEventListener('click', () => this.inputEl.focus());

    // Input handlers
    this.inputEl.addEventListener('keydown', (e) => this.handleKeyDown(e));
    this.inputEl.addEventListener('input', () => this.updateCursorPosition());
    
    // Auto-focus immediately
    setTimeout(() => this.inputEl.focus(), 100);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const value = this.inputEl.value.trim();
      this.executeCommand(value);
      this.inputEl.value = '';
      this.updateCursorPosition();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.history.length > 0) {
        if (this.historyIndex === -1) this.historyIndex = this.history.length;
        this.historyIndex = Math.max(0, this.historyIndex - 1);
        this.inputEl.value = this.history[this.historyIndex];
        this.updateCursorPosition();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.history.length > 0 && this.historyIndex !== -1) {
        this.historyIndex++;
        if (this.historyIndex >= this.history.length) {
          this.historyIndex = -1;
          this.inputEl.value = '';
        } else {
          this.inputEl.value = this.history[this.historyIndex];
        }
        this.updateCursorPosition();
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      this.handleAutocomplete();
    }
  }

  updateCursorPosition() {
    // Small timeout to let input state settle
    setTimeout(() => {
      // In a real terminal, custom cursor blinking is positioned at the end of the text.
      // Emojis/fonts can shift alignment, but simply focusing the input hides native line cursor anyway.
    }, 10);
  }

  handleAutocomplete() {
    const value = this.inputEl.value.trim().toLowerCase();
    if (!value) return;

    const matches = this.commands.filter(cmd => cmd.startsWith(value));
    if (matches.length === 1) {
      this.inputEl.value = matches[0];
    } else if (matches.length > 1) {
      // Print options
      this.printLine(`> ${this.inputEl.value}`, 'terminal-prompt');
      this.printLine(matches.join('   '), 'info');
    }
  }

  executeCommand(cmdStr) {
    const cleanCmd = cmdStr.trim();
    if (!cleanCmd) return;

    this.printLine(`> ${cleanCmd}`, 'terminal-prompt');
    this.history.push(cleanCmd);
    this.historyIndex = -1;

    const tokens = cleanCmd.toLowerCase().split(' ');
    const baseCmd = tokens[0];
    const args = tokens.slice(1);

    if (!this.commands.includes(baseCmd)) {
      this.printLine(`Command not found: '${baseCmd}'. Type 'help' to view available commands.`, 'warn');
      this.scrollToBottom();
      return;
    }

    switch (baseCmd) {
      case 'help':
        this.cmdHelp();
        break;
      case 'about':
        this.cmdAbout();
        break;
      case 'projects':
        this.cmdProjects();
        break;
      case 'skills':
        this.cmdSkills();
        break;
      case 'certificates':
        this.cmdCertificates();
        break;
      case 'experience':
        this.cmdExperience();
        break;
      case 'resume':
        this.cmdResume();
        break;
      case 'contact':
        this.cmdContact();
        break;
      case 'github':
        this.cmdGithub();
        break;
      case 'linkedin':
        this.cmdLinkedin();
        break;
      case 'gallery':
        this.cmdGallery();
        break;
      case 'achievements':
        this.cmdAchievements();
        break;
      case 'services':
        this.cmdServices();
        break;
      case 'education':
        this.cmdEducation();
        break;
      case 'clear':
        this.historyEl.innerHTML = '';
        break;
      case 'date':
        this.printLine(new Date().toDateString());
        break;
      case 'time':
        this.printLine(new Date().toTimeString());
        break;
      case 'whoami':
        this.printLine(`${CONFIG.profile.name} - ${CONFIG.profile.title}`);
        break;
      case 'version':
        this.printLine(`Portfolio OS version: ${CONFIG.profile.subtitle} (Release date: 2026-07-01)`);
        break;
      case 'exit':
        this.wm.closeWindow('terminal');
        break;
    }

    this.scrollToBottom();
  }

  printLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    this.historyEl.appendChild(line);
  }

  printElement(element) {
    this.historyEl.appendChild(element);
  }

  scrollToBottom() {
    this.historyEl.scrollTop = this.historyEl.scrollHeight;
  }

  /* Command Actions */
  cmdHelp() {
    const header = document.createElement('div');
    header.className = 'terminal-cmd-heading';
    header.textContent = 'AVAILABLE COMMANDS';
    this.printElement(header);

    const helpMap = {
      'about': 'Display professional summary bio',
      'projects': 'List frontend web projects portfolio',
      'skills': 'Show technical skills levels dashboard',
      'experience': 'Display work history details',
      'resume': 'Download PDF Resume CV',
      'contact': 'Show email and social contact options',
      'github': 'Open GitHub Profile / Launch GitHub App',
      'linkedin': 'Open LinkedIn profile app section',
      'certificates': 'View licenses and certifications',
      'gallery': 'Show projects representation grid',
      'achievements': 'Display awards & career milestones',
      'services': 'Show technical dev services offered',
      'education': 'List academic background',
      'clear': 'Clear screen logs',
      'date / time': 'Show current date and time info',
      'whoami': 'Who is the logged in user?',
      'version': 'Show current OS compile version',
      'exit': 'Close current terminal terminal window'
    };

    const table = document.createElement('table');
    table.className = 'terminal-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(helpMap).map(([cmd, desc]) => `
          <tr>
            <td style="color: #38bdf8; font-weight: bold;">${cmd}</td>
            <td>${desc}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    this.printElement(table);
  }

  cmdAbout() {
    this.printLine(`${CONFIG.profile.name}`, 'terminal-cmd-heading');
    this.printLine(CONFIG.profile.bio);
    this.printLine(`\nLocation: ${CONFIG.profile.location}`);
    this.printLine(`Email: ${CONFIG.profile.email}`);
  }

  cmdProjects() {
    this.printLine('PROJECTS PORTFOLIO', 'terminal-cmd-heading');
    CONFIG.projects.forEach(p => {
      this.printLine(`• ${p.title} (${p.tech.join(', ')})`);
      this.printLine(`  Description: ${p.description}`);
      this.printLine(`  GitHub Stars: ⭐ ${p.stars} | URL: ${p.url}\n`);
    });
  }

  cmdSkills() {
    this.printLine('TECHNICAL SKILLS PROGRESS', 'terminal-cmd-heading');
    CONFIG.skills.forEach(s => {
      const barLength = Math.round(s.level / 10);
      const bar = '█'.repeat(barLength) + '░'.repeat(10 - barLength);
      this.printLine(`${s.icon} ${s.name.padEnd(20)} [${bar}] ${s.level}%`);
    });
  }

  cmdCertificates() {
    this.printLine('CERTIFICATIONS', 'terminal-cmd-heading');
    CONFIG.certificates.forEach(c => {
      this.printLine(`• ${c.name}`);
      this.printLine(`  Issued by: ${c.issuer} | Date: ${c.date}\n`);
    });
  }

  cmdExperience() {
    this.printLine('WORK EXPERIENCE', 'terminal-cmd-heading');
    CONFIG.experience.forEach(exp => {
      this.printLine(`• ${exp.role} at ${exp.company} (${exp.duration})`);
      exp.bullets.forEach(b => {
        this.printLine(`  - ${b}`);
      });
      this.printLine('');
    });
  }

  cmdResume() {
    this.printLine('Downloading Resume PDF...');
    this.printLine(`Direct Link: ${CONFIG.profile.resumeUrl}`);
    // Simulate window open download
    window.open(CONFIG.profile.resumeUrl, '_blank');
  }

  cmdContact() {
    this.printLine('CONTACT INFORMATION', 'terminal-cmd-heading');
    this.printLine(`Email: ${CONFIG.profile.email}`);
    this.printLine(`LinkedIn: ${CONFIG.profile.linkedin}`);
    this.printLine(`GitHub: https://github.com/${CONFIG.profile.github}`);
  }

  cmdGithub() {
    this.printLine('Opening GitHub application...');
    // Programmatically open the desktop app
    setTimeout(() => {
      const icon = document.querySelector('.desktop-icon[data-app="github"]');
      if (icon) icon.click();
    }, 300);
  }

  cmdLinkedin() {
    this.printLine('Opening LinkedIn application...');
    // Programmatically open LinkedIn app
    setTimeout(() => {
      const icon = document.querySelector('.desktop-icon[data-app="linkedin"]');
      if (icon) icon.click();
    }, 300);
  }

  cmdGallery() {
    this.printLine('ASCII ART PROJECT GALLERY', 'terminal-cmd-heading');
    
    // Draw simple ascii frame art
    const art = `
    +-----------------------------------------------+
    |                  PROJECT GALLERY              |
    +-----------------------------------------------+
    |   [1] Portfolio OS v2.0                       |
    |   [2] Crypto Dashboard                        |
    |   [3] Collaborative Draw                      |
    |   [4] Glassmorphic Editor                     |
    +-----------------------------------------------+
    `;
    this.printLine(art);
    this.printLine('Type "projects" to view active repository URLs.');
  }

  cmdAchievements() {
    this.printLine('CAREER ACHIEVEMENTS & MILESTONES', 'terminal-cmd-heading');
    CONFIG.achievements.forEach(ach => {
      this.printLine(`🏆 [${ach.title}] ${ach.event}`);
      this.printLine(`   Description: ${ach.description}\n`);
    });
  }

  cmdServices() {
    this.printLine('TECHNICAL SERVICES OFFERED', 'terminal-cmd-heading');
    CONFIG.services.forEach(s => {
      this.printLine(`🛠️ ${s.title}`);
      this.printLine(`   ${s.description}\n`);
    });
  }

  cmdEducation() {
    this.printLine('EDUCATION HISTORY', 'terminal-cmd-heading');
    CONFIG.education.forEach(edu => {
      this.printLine(`🎓 ${edu.degree}`);
      this.printLine(`   School: ${edu.school} (${edu.duration})`);
      this.printLine(`   Focus: ${edu.details}\n`);
    });
  }
}
