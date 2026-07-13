// GitHubApp.js - Live GitHub integration & contribution chart rendering
import { CONFIG } from '../config.js';

export class GitHubApp {
  constructor(containerEl, notifySystem) {
    this.container = containerEl;
    this.notifier = notifySystem;
    this.username = localStorage.getItem('os_github_username') || CONFIG.profile.github;
    this.profileData = null;
    this.reposData = [];

    this.init();
  }

  async init() {
    this.container.innerHTML = `
      <div class="github-container">
        <!-- Profile Header -->
        <div class="github-profile-card" id="github-profile-card">
          <div class="github-avatar-skeleton" style="width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.05);"></div>
          <div style="flex: 1;">
            <div style="height: 20px; width: 150px; background: rgba(255,255,255,0.05); margin-bottom: 8px; border-radius: 4px;"></div>
            <div style="height: 12px; width: 220px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        </div>

        <!-- Contribution Calendar Graph -->
        <div class="contrib-calendar-section">
          <h3>GitHub Contribution History</h3>
          <div class="contrib-calendar-grid" id="contrib-calendar-grid">
            <!-- Box cells populated by JS -->
          </div>
        </div>

        <!-- Languages & Statistics -->
        <div class="language-section">
          <h3>Most Used Languages</h3>
          <div class="lang-bar-container" id="lang-bar-container"></div>
          <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 10px; font-size: 0.75rem; color: var(--text-secondary);" id="lang-labels"></div>
        </div>

        <!-- Pinned / Active Projects -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 0.95rem; color: #fff;">Repositories</h3>
          <div class="github-repos-grid" id="github-repos-grid"></div>
        </div>
      </div>
    `;

    this.profileCardEl = this.container.querySelector('#github-profile-card');
    this.calendarGridEl = this.container.querySelector('#contrib-calendar-grid');
    this.langBarEl = this.container.querySelector('#lang-bar-container');
    this.langLabelsEl = this.container.querySelector('#lang-labels');
    this.reposGridEl = this.container.querySelector('#github-repos-grid');

    // Populate calendar grid
    this.renderContributionCalendar();

    // Fetch and populate details
    await this.fetchGitHubData();
  }

  renderContributionCalendar() {
    this.calendarGridEl.innerHTML = '';
    // GitHub calendar is 53 columns by 7 rows
    const totalDays = 53 * 7;
    for (let i = 0; i < totalDays; i++) {
      const cell = document.createElement('div');
      cell.className = 'contrib-day';

      // Generate a organic-looking contribution distribution (midweek busy, weekends quiet)
      const dayOfWeek = i % 7;
      let level = 0;
      const rand = Math.random();

      if (dayOfWeek === 0 || dayOfWeek === 6) { // Weekends
        if (rand > 0.85) level = 1;
        else if (rand > 0.97) level = 2;
      } else { // Weekdays
        if (rand > 0.8) level = 4;
        else if (rand > 0.6) level = 3;
        else if (rand > 0.3) level = 2;
        else if (rand > 0.1) level = 1;
      }

      cell.classList.add(`lvl-${level}`);
      
      // Add simple date tooltip description
      const date = new Date();
      date.setDate(date.getDate() - (totalDays - i));
      cell.title = `${level} contributions on ${date.toDateString()}`;

      this.calendarGridEl.appendChild(cell);
    }
  }

  async fetchGitHubData() {
    try {
      // Fetch User profile info
      const userRes = await fetch(`https://api.github.com/users/${this.username}`);
      if (!userRes.ok) throw new Error("Rate limit / user not found");
      this.profileData = await userRes.json();

      // Fetch Repos info
      const reposRes = await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=6`);
      if (reposRes.ok) {
        this.reposData = await reposRes.json();
      }

      this.renderProfileCard(this.profileData);
      this.renderLanguagesAndRepos();
    } catch (e) {
      console.warn("GitHub API limit exceeded or network error, falling back to mock details.");
      // Fallback
      this.profileData = {
        avatar_url: CONFIG.profile.avatar,
        name: CONFIG.profile.name,
        login: this.username,
        bio: CONFIG.profile.bio,
        followers: 142,
        following: 56,
        public_repos: CONFIG.projects.length,
        html_url: `https://github.com/${this.username}`
      };
      this.reposData = CONFIG.projects.map(p => ({
        name: p.title,
        description: p.description,
        language: p.tech[0],
        stargazers_count: p.stars,
        forks_count: Math.round(p.stars / 3),
        clone_url: p.url,
        html_url: p.url
      }));

      this.renderProfileCard(this.profileData);
      this.renderLanguagesAndRepos();
    }
  }

  renderProfileCard(data) {
    this.profileCardEl.innerHTML = `
      <img src="${data.avatar_url}" class="github-avatar" alt="GitHub Avatar">
      <div class="github-info">
        <h2 style="margin: 0; font-size: 1.25rem;">${data.name || data.login}</h2>
        <div style="font-size: 0.8rem; color: var(--primary-color);">@${data.login}</div>
        <p style="font-size: 0.8rem; margin-top: 6px; color: var(--text-secondary); line-height: 1.4;">${data.bio || "No profile bio available."}</p>
        <div class="github-stats-row">
          <div class="github-stat-item">Followers: <span>${data.followers}</span></div>
          <div class="github-stat-item">Following: <span>${data.following}</span></div>
          <div class="github-stat-item">Repos: <span>${data.public_repos}</span></div>
        </div>
        <button class="btn-github-profile" id="btn-open-gh-profile">
          <i class="fa-brands fa-github"></i> Open Profile
        </button>
      </div>
    `;

    this.profileCardEl.querySelector('#btn-open-gh-profile').addEventListener('click', () => {
      window.open(data.html_url, '_blank');
      if (this.notifier) {
        this.notifier.pushToast("GitHub App", "Opening github profile in browser...");
      }
    });
  }

  renderLanguagesAndRepos() {
    // 1. Language breakdown calculation
    const langCount = {};
    let totalCount = 0;
    this.reposData.forEach(repo => {
      if (repo.language) {
        langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        totalCount++;
      }
    });

    // Make default fallback languages if empty
    if (totalCount === 0) {
      langCount["JavaScript"] = 4;
      langCount["CSS"] = 2;
      langCount["TypeScript"] = 1;
      totalCount = 7;
    }

    const colors = {
      "JavaScript": "#f1e05a",
      "TypeScript": "#3178c6",
      "HTML": "#e34c26",
      "CSS": "#563d7c",
      "Vue": "#41b883",
      "Python": "#3572A5",
      "Shell": "#89e051"
    };

    this.langBarEl.innerHTML = '';
    this.langLabelsEl.innerHTML = '';

    Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .forEach(([lang, val]) => {
        const pct = ((val / totalCount) * 100).toFixed(1);
        const color = colors[lang] || "#888888";

        // Segment bar
        const seg = document.createElement('div');
        seg.className = 'lang-segment';
        seg.style.width = `${pct}%`;
        seg.style.backgroundColor = color;
        seg.title = `${lang}: ${pct}%`;
        this.langBarEl.appendChild(seg);

        // Label
        const label = document.createElement('div');
        label.style.display = 'flex';
        label.style.alignItems = 'center';
        label.style.gap = '5px';
        label.innerHTML = `
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${color}; display: inline-block;"></span>
          <span>${lang} (${pct}%)</span>
        `;
        this.langLabelsEl.appendChild(label);
      });

    // 2. Repositories list
    this.reposGridEl.innerHTML = '';
    this.reposData.slice(0, 6).forEach(repo => {
      const card = document.createElement('div');
      card.className = 'repo-card';
      const langColor = colors[repo.language] || "#888888";

      card.innerHTML = `
        <div>
          <div class="repo-title" style="cursor: pointer;">${repo.name}</div>
          <div class="repo-desc">${repo.description || "No description provided."}</div>
        </div>
        <div class="repo-footer">
          <div class="repo-lang">
            <span class="repo-lang-dot" style="background-color: ${langColor};"></span>
            <span>${repo.language || "Web"}</span>
          </div>
          <div style="display: flex; gap: 8px;">
            <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</span>
          </div>
        </div>
      `;

      // Open repo click
      card.querySelector('.repo-title').addEventListener('click', () => {
        window.open(repo.html_url, '_blank');
      });

      this.reposGridEl.appendChild(card);
    });
  }
}
