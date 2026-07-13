// NotificationSystem.js - Notifications tray & floating toasts
export class NotificationSystem {
  constructor(panelEl, listEl, toastContainerEl, countBadgeEl) {
    this.panel = panelEl;
    this.list = listEl;
    this.toastContainer = toastContainerEl;
    this.countBadge = countBadgeEl; // badge element in taskbar tray
    
    // Load notifications from LocalStorage or initialize with defaults
    this.notifications = JSON.parse(localStorage.getItem('os_notifications')) || [
      {
        id: 'notif-1',
        title: 'System Boot Completed',
        message: 'Portfolio OS v2.0 initialized successfully. Welcome back!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        icon: '💻',
        unread: true
      },
      {
        id: 'notif-2',
        title: 'GitHub Connected',
        message: 'Established pipeline with GitHub REST API.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        icon: '🐙',
        unread: true
      }
    ];

    this.init();
  }

  init() {
    this.renderNotifications();
    this.updateBadge();
    
    // Bind tray clear button
    const clearBtn = document.getElementById('btn-clear-notifications');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearAll());
    }

    // Toggle tray on clicking bell icon
    const bellIcon = document.getElementById('tray-bell');
    if (bellIcon) {
      bellIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePanel();
      });
    }

    // Close notifications panel on clicking outside
    document.addEventListener('click', (e) => {
      if (!this.panel.contains(e.target) && e.target.id !== 'tray-bell') {
        this.panel.classList.remove('open');
      }
    });
  }

  renderNotifications() {
    if (this.notifications.length === 0) {
      this.list.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; margin-top: 40px;">
          No notifications.
        </div>
      `;
      return;
    }

    this.list.innerHTML = this.notifications.map(n => `
      <div class="notification-item ${n.unread ? 'unread' : ''}" data-id="${n.id}">
        <div class="notification-icon">${n.icon}</div>
        <div class="notification-text">
          <h4>${n.title}</h4>
          <p>${n.message}</p>
          <div class="notification-time">${n.time}</div>
        </div>
      </div>
    `).join('');

    // Add click listeners to mark as read
    this.list.querySelectorAll('.notification-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        this.markAsRead(id);
      });
    });
  }

  pushNotification(title, message, icon = '🔔') {
    const notif = {
      id: `notif-${Date.now()}`,
      title,
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      icon,
      unread: true
    };

    this.notifications.unshift(notif);
    
    // Keep max 10 notifications
    if (this.notifications.length > 10) {
      this.notifications.pop();
    }

    this.saveNotifications();
    this.renderNotifications();
    this.updateBadge();
    
    // Trigger toast
    this.pushToast(title, message, icon);
  }

  pushToast(title, message, icon = '🔔') {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `
      <div style="font-size: 1.3rem;">${icon}</div>
      <div style="flex:1;">
        <h4 style="font-size: 0.8rem; font-weight: 600; color: #fff; margin:0;">${title}</h4>
        <p style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 2px;">${message}</p>
      </div>
    `;

    this.toastContainer.appendChild(toast);

    // Play subtle audio sound (optional synth sound)
    this.playNotificationSound();

    // Remove toast after 4s
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  playNotificationSound() {
    try {
      // Use Web Audio API to synthesize a nice, clean futuristic sound without external assets
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      
      // Check if audio context is allowed (browser security blocks un-interacted audio)
      if (ctx.state === 'suspended') return;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      // Fail silently if audio block
    }
  }

  markAsRead(id) {
    const notif = this.notifications.find(n => n.id === id);
    if (notif && notif.unread) {
      notif.unread = false;
      this.saveNotifications();
      this.renderNotifications();
      this.updateBadge();
    }
  }

  clearAll() {
    this.notifications = [];
    this.saveNotifications();
    this.renderNotifications();
    this.updateBadge();
  }

  updateBadge() {
    const unreadCount = this.notifications.filter(n => n.unread).length;
    if (unreadCount > 0) {
      this.countBadge.classList.add('glow');
      this.countBadge.style.color = 'var(--primary-color)';
    } else {
      this.countBadge.classList.remove('glow');
      this.countBadge.style.color = 'var(--text-secondary)';
    }
  }

  togglePanel() {
    this.panel.classList.toggle('open');
    // If opening, mark all notifications as read
    if (this.panel.classList.contains('open')) {
      this.notifications.forEach(n => n.unread = false);
      this.saveNotifications();
      this.renderNotifications();
      this.updateBadge();
    }
  }

  saveNotifications() {
    localStorage.setItem('os_notifications', JSON.stringify(this.notifications));
  }
}
