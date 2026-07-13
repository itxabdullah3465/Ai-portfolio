// LinkedInApp.js - LinkedIn replica card section
import { CONFIG } from '../config.js';

export class LinkedInApp {
  constructor(containerEl, notifySystem) {
    this.container = containerEl;
    this.notifier = notifySystem;
    this.linkedinUrl = localStorage.getItem('os_linkedin_url') || CONFIG.profile.linkedin;

    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="linkedin-container">
        <!-- LinkedIn Header -->
        <div class="linkedin-banner"></div>
        <div class="linkedin-profile-header">
          <div class="linkedin-avatar-wrapper">
            <img src="${CONFIG.profile.avatar}" class="linkedin-avatar" alt="Avatar">
          </div>
          
          <div class="linkedin-headline-block">
            <div class="linkedin-name">${CONFIG.profile.name}</div>
            <div class="linkedin-title">${CONFIG.profile.title}</div>
            <div class="linkedin-location">${CONFIG.profile.location} • <a href="#" id="linkedin-contact-info">Contact info</a></div>
            
            <div class="linkedin-actions">
              <button class="btn-linkedin-connect" id="btn-linkedin-connect"><i class="fa-solid fa-user-plus"></i> Connect</button>
              <button class="btn-linkedin-secondary" id="btn-linkedin-open">View Profile</button>
              <button class="btn-linkedin-secondary" id="btn-linkedin-copy" title="Copy profile URL"><i class="fa-regular fa-copy"></i> Copy Link</button>
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">About</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
            ${CONFIG.profile.bio}
          </p>
        </div>

        <!-- Experience Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Experience</h3>
          <div id="linkedin-exp-list"></div>
        </div>

        <!-- Education Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Education</h3>
          <div id="linkedin-edu-list"></div>
        </div>

        <!-- Skills Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Skills</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;" id="linkedin-skills-tags"></div>
        </div>

        <!-- Certifications Section -->
        <div class="linkedin-section">
          <h3 class="linkedin-section-title">Licenses & Certifications</h3>
          <div id="linkedin-certs-list"></div>
        </div>
      </div>
    `;

    this.expEl = this.container.querySelector('#linkedin-exp-list');
    this.eduEl = this.container.querySelector('#linkedin-edu-list');
    this.skillsEl = this.container.querySelector('#linkedin-skills-tags');
    this.certsEl = this.container.querySelector('#linkedin-certs-list');

    // Populate data
    this.populateData();
    this.bindEvents();
  }

  populateData() {
    // 1. Experience
    this.expEl.innerHTML = CONFIG.experience.map(exp => `
      <div class="linkedin-exp-item">
        <div class="linkedin-exp-company-logo">🏢</div>
        <div class="linkedin-exp-details">
          <h4>${exp.role}</h4>
          <span class="company">${exp.company}</span> • <span class="duration">${exp.duration}</span>
          <ul>
            ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    // 2. Education
    this.eduEl.innerHTML = CONFIG.education.map(edu => `
      <div class="linkedin-exp-item">
        <div class="linkedin-exp-company-logo">🎓</div>
        <div class="linkedin-exp-details">
          <h4>${edu.school}</h4>
          <span class="company">${edu.degree}</span> • <span class="duration">${edu.duration}</span>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${edu.details}</p>
        </div>
      </div>
    `).join('');

    // 3. Skills
    this.skillsEl.innerHTML = CONFIG.skills.map(s => `
      <span style="background: rgba(255,255,255,0.04); border: 1px solid var(--panel-border); padding: 5px 12px; border-radius: 15px; font-size: 0.75rem; color: var(--text-secondary);">
        ${s.icon} ${s.name}
      </span>
    `).join('');

    // 4. Certifications
    this.certsEl.innerHTML = CONFIG.certificates.map(c => `
      <div class="linkedin-exp-item" style="margin-bottom: 12px;">
        <div class="linkedin-exp-company-logo" style="width: 38px; height: 38px; font-size: 1.2rem;">🏅</div>
        <div class="linkedin-exp-details">
          <h4 style="font-size: 0.85rem;">${c.name}</h4>
          <p style="font-size: 0.75rem; color: var(--text-secondary);">${c.issuer} • Issued ${c.date}</p>
        </div>
      </div>
    `).join('');
  }

  bindEvents() {
    this.container.querySelector('#btn-linkedin-connect').addEventListener('click', () => {
      this.notifier.pushToast("LinkedIn Connect", "Connection invitation sent to Muhammad Abdullah!");
    });

    this.container.querySelector('#btn-linkedin-open').addEventListener('click', () => {
      window.open(this.linkedinUrl, '_blank');
      this.notifier.pushToast("LinkedIn App", "Opening LinkedIn Profile in default browser...");
    });

    this.container.querySelector('#btn-linkedin-copy').addEventListener('click', () => {
      navigator.clipboard.writeText(this.linkedinUrl).then(() => {
        this.notifier.pushToast("LinkedIn Link", "LinkedIn URL copied to clipboard!");
      }).catch(err => {
        console.error("Failed to copy link: ", err);
      });
    });

    this.container.querySelector('#linkedin-contact-info').addEventListener('click', (e) => {
      e.preventDefault();
      this.notifier.pushToast("Contact Info", `Email: ${CONFIG.profile.email}`);
    });
  }
}
