// WindowManager.js - Window creation, dragging, resizing, snapping, and taskbar integration
export class WindowManager {
  constructor(taskbarContainerId, windowsContainerId, snapIndicatorId) {
    this.taskbarContainer = document.getElementById(taskbarContainerId);
    this.windowsContainer = document.getElementById(windowsContainerId);
    this.snapIndicator = document.getElementById(snapIndicatorId);
    
    this.windows = new Map(); // appId -> Window element
    this.activeWindow = null;
    this.zIndexCounter = 100;
    this.snapThreshold = 20; // px from edge to trigger snap
    
    // Bind global events
    window.addEventListener('resize', () => this.handleScreenResize());
  }

  createWindow(appId, title, contentHtmlOrElement, iconClass = 'fa-solid fa-window-maximize') {
    // If window already exists, restore it if minimized and focus it
    if (this.windows.has(appId)) {
      const win = this.windows.get(appId);
      if (win.classList.contains('minimized')) {
        this.restoreWindow(appId);
      }
      this.focusWindow(appId);
      return win;
    }

    // Create window elements
    const win = document.createElement('div');
    win.className = 'window';
    win.id = `win-${appId}`;
    win.setAttribute('data-app', appId);
    win.style.zIndex = ++this.zIndexCounter;

    // Center window initially on desktop
    const desktopWidth = window.innerWidth;
    const desktopHeight = window.innerHeight - 48; // taskbar height
    const width = Math.min(640, desktopWidth - 40);
    const height = Math.min(480, desktopHeight - 40);
    const left = (desktopWidth - width) / 2 + (this.windows.size * 20) % 100;
    const top = (desktopHeight - height) / 2 + (this.windows.size * 20) % 100;

    win.style.width = `${width}px`;
    win.style.height = `${height}px`;
    win.style.left = `${left}px`;
    win.style.top = `${top}px`;

    // Save initial coordinates for restoring from max/snap
    win.customCoords = { left, top, width, height };

    // Structure of Window Header & Content
    win.innerHTML = `
      <div class="window-header">
        <div class="window-title-bar">
          <i class="window-title-icon ${iconClass}"></i>
          <span>${title}</span>
        </div>
        <div class="window-controls">
          <button class="window-control-btn minimize" title="Minimize"></button>
          <button class="window-control-btn maximize" title="Maximize"></button>
          <button class="window-control-btn close" title="Close"></button>
        </div>
      </div>
      <div class="window-content"></div>
      
      <!-- Resizers -->
      <div class="resize-handle n"></div>
      <div class="resize-handle s"></div>
      <div class="resize-handle e"></div>
      <div class="resize-handle w"></div>
      <div class="resize-handle se"></div>
      <div class="resize-handle sw"></div>
    `;

    // Append custom HTML or DOM Element
    const contentEl = win.querySelector('.window-content');
    if (typeof contentHtmlOrElement === 'string') {
      contentEl.innerHTML = contentHtmlOrElement;
    } else {
      contentEl.appendChild(contentHtmlOrElement);
    }

    this.windowsContainer.appendChild(win);
    this.windows.set(appId, win);

    // Setup window controls
    this.setupWindowEvents(win, appId);
    
    // Add to Taskbar
    this.addTaskbarTile(appId, title, iconClass);

    this.focusWindow(appId);
    
    // Dispatch custom event for app initiation
    win.dispatchEvent(new CustomEvent('app-ready', { detail: { contentEl } }));

    return win;
  }

  setupWindowEvents(win, appId) {
    const header = win.querySelector('.window-header');
    
    // Focus window on click
    win.addEventListener('mousedown', () => this.focusWindow(appId));

    // Dragging
    header.addEventListener('mousedown', (e) => this.initDrag(e, win));

    // Double-click header to maximize/restore
    header.addEventListener('dblclick', () => this.toggleMaximize(appId));

    // Controls
    win.querySelector('.window-control-btn.close').addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeWindow(appId);
    });
    
    win.querySelector('.window-control-btn.minimize').addEventListener('click', (e) => {
      e.stopPropagation();
      this.minimizeWindow(appId);
    });

    win.querySelector('.window-control-btn.maximize').addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMaximize(appId);
    });

    // Resizing
    const handles = win.querySelectorAll('.resize-handle');
    handles.forEach(handle => {
      handle.addEventListener('mousedown', (e) => this.initResize(e, win, handle.className.split(' ')[1]));
    });
  }

  initDrag(e, win) {
    if (e.target.closest('.window-control-btn')) return; // Avoid drag on button click
    if (win.classList.contains('maximized')) return; // Avoid drag if maximized
    
    e.preventDefault();
    this.focusWindow(win.getAttribute('data-app'));

    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = parseFloat(win.style.left);
    const startTop = parseFloat(win.style.top);
    
    let isSnapped = win.classList.contains('snapped-left') || win.classList.contains('snapped-right');
    let snapOffsetRatio = 0.5; // default center offset when dragging out of snap

    if (isSnapped) {
      // Calculate relative X position on header to unsnap smoothly
      const rect = win.getBoundingClientRect();
      snapOffsetRatio = (startX - rect.left) / rect.width;
    }

    const mouseMoveHandler = (moveEvent) => {
      let deltaX = moveEvent.clientX - startX;
      let deltaY = moveEvent.clientY - startY;

      let newLeft = startLeft + deltaX;
      let newTop = startTop + deltaY;

      // Handle unsnapping if dragged while snapped
      if (isSnapped) {
        win.classList.remove('snapped-left', 'snapped-right');
        win.style.width = `${win.customCoords.width}px`;
        win.style.height = `${win.customCoords.height}px`;
        
        // Reposition left relative to cursor so cursor doesn't jump
        newLeft = moveEvent.clientX - (win.customCoords.width * snapOffsetRatio);
        newTop = moveEvent.clientY - 15; // cursor aligns near top of header
        
        isSnapped = false;
      }

      // Check snap visual indicators
      const x = moveEvent.clientX;
      if (x < this.snapThreshold) {
        this.showSnapIndicator(0, 0, window.innerWidth / 2, window.innerHeight - 48);
      } else if (x > window.innerWidth - this.snapThreshold) {
        this.showSnapIndicator(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight - 48);
      } else {
        this.hideSnapIndicator();
      }

      // Prevent dragging top boundary below taskbar or completely offscreen
      newTop = Math.max(0, newTop);

      win.style.left = `${newLeft}px`;
      win.style.top = `${newTop}px`;
    };

    const mouseUpHandler = (upEvent) => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);

      const x = upEvent.clientX;
      this.hideSnapIndicator();

      if (x < this.snapThreshold) {
        this.snapWindow(win, 'left');
      } else if (x > window.innerWidth - this.snapThreshold) {
        this.snapWindow(win, 'right');
      } else {
        // Save final coordinates
        win.customCoords.left = parseFloat(win.style.left);
        win.customCoords.top = parseFloat(win.style.top);
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', mouseUpHandler);
  }

  initResize(e, win, direction) {
    e.preventDefault();
    e.stopPropagation();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = parseFloat(win.style.width);
    const startHeight = parseFloat(win.style.height);
    const startLeft = parseFloat(win.style.left);
    const startTop = parseFloat(win.style.top);

    const mouseMoveHandler = (moveEvent) => {
      let deltaX = moveEvent.clientX - startX;
      let deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newLeft = startLeft;
      let newTop = startTop;

      const minWidth = 320;
      const minHeight = 240;

      // Handle directions
      if (direction.includes('e')) {
        newWidth = Math.max(minWidth, startWidth + deltaX);
      }
      if (direction.includes('w')) {
        const potentialWidth = startWidth - deltaX;
        if (potentialWidth >= minWidth) {
          newWidth = potentialWidth;
          newLeft = startLeft + deltaX;
        }
      }
      if (direction.includes('s')) {
        newHeight = Math.max(minHeight, startHeight + deltaY);
      }
      if (direction.includes('n')) {
        const potentialHeight = startHeight - deltaY;
        if (potentialHeight >= minHeight) {
          newHeight = potentialHeight;
          newTop = startTop + deltaY;
        }
      }

      win.style.width = `${newWidth}px`;
      win.style.height = `${newHeight}px`;
      win.style.left = `${newLeft}px`;
      win.style.top = `${newTop}px`;
      
      // Save current sizes
      win.customCoords = { left: newLeft, top: newTop, width: newWidth, height: newHeight };
    };

    const mouseUpHandler = () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', mouseUpHandler);
  }

  showSnapIndicator(x, y, w, h) {
    this.snapIndicator.style.left = `${x}px`;
    this.snapIndicator.style.top = `${y}px`;
    this.snapIndicator.style.width = `${w}px`;
    this.snapIndicator.style.height = `${h}px`;
    this.snapIndicator.classList.add('visible');
  }

  hideSnapIndicator() {
    this.snapIndicator.classList.remove('visible');
  }

  snapWindow(win, side) {
    win.classList.remove('maximized');
    const width = window.innerWidth / 2;
    const height = window.innerHeight - 48; // taskbar height
    const left = side === 'left' ? 0 : width;
    const top = 0;

    win.style.width = `${width}px`;
    win.style.height = `${height}px`;
    win.style.left = `${left}px`;
    win.style.top = `${top}px`;

    if (side === 'left') {
      win.classList.add('snapped-left');
    } else {
      win.classList.add('snapped-right');
    }
  }

  focusWindow(appId) {
    const win = this.windows.get(appId);
    if (!win) return;

    if (this.activeWindow) {
      this.activeWindow.classList.remove('active');
    }

    win.classList.add('active');
    win.style.zIndex = ++this.zIndexCounter;
    this.activeWindow = win;

    // Focus corresponding taskbar tile
    this.focusTaskbarTile(appId);
  }

  minimizeWindow(appId) {
    const win = this.windows.get(appId);
    if (!win) return;

    win.classList.add('minimized');
    win.classList.remove('active');
    
    // Blur tile
    const tile = this.taskbarContainer.querySelector(`[data-app="${appId}"]`);
    if (tile) tile.classList.remove('active');

    if (this.activeWindow === win) {
      this.activeWindow = null;
      // Focus the next window on top
      this.focusNextTopWindow();
    }
  }

  restoreWindow(appId) {
    const win = this.windows.get(appId);
    if (!win) return;

    win.classList.remove('minimized');
    this.focusWindow(appId);
  }

  toggleMaximize(appId) {
    const win = this.windows.get(appId);
    if (!win) return;

    if (win.classList.contains('maximized')) {
      win.classList.remove('maximized');
      // Restore coordinates
      win.style.left = `${win.customCoords.left}px`;
      win.style.top = `${win.customCoords.top}px`;
      win.style.width = `${win.customCoords.width}px`;
      win.style.height = `${win.customCoords.height}px`;
    } else {
      win.classList.add('maximized');
      win.classList.remove('snapped-left', 'snapped-right');
      win.style.left = '0px';
      win.style.top = '0px';
      win.style.width = '100%';
      win.style.height = 'calc(100vh - 48px)';
    }
  }

  closeWindow(appId) {
    const win = this.windows.get(appId);
    if (!win) return;

    // Trigger animate closed or remove DOM
    win.style.opacity = '0';
    win.style.transform = 'scale(0.9) translateY(20px)';
    
    setTimeout(() => {
      win.remove();
      this.windows.delete(appId);
      this.removeTaskbarTile(appId);
      
      if (this.activeWindow === win) {
        this.activeWindow = null;
        this.focusNextTopWindow();
      }
    }, 150);
  }

  focusNextTopWindow() {
    let nextTopWin = null;
    let maxZ = -1;

    this.windows.forEach((win, appId) => {
      if (!win.classList.contains('minimized')) {
        const z = parseInt(win.style.zIndex);
        if (z > maxZ) {
          maxZ = z;
          nextTopWin = appId;
        }
      }
    });

    if (nextTopWin) {
      this.focusWindow(nextTopWin);
    }
  }

  handleScreenResize() {
    // Redraw maximized windows to cover the viewport
    this.windows.forEach((win) => {
      if (win.classList.contains('maximized')) {
        win.style.width = '100%';
        win.style.height = 'calc(100vh - 48px)';
      }
    });
  }

  /* Taskbar Management */
  addTaskbarTile(appId, title, iconClass) {
    // Avoid double adding
    if (this.taskbarContainer.querySelector(`[data-app="${appId}"]`)) return;

    const tile = document.createElement('div');
    tile.className = 'taskbar-app-tile';
    tile.setAttribute('data-app', appId);
    tile.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${title}</span>
    `;

    tile.addEventListener('click', () => {
      const win = this.windows.get(appId);
      if (!win) return;

      if (win.classList.contains('minimized')) {
        this.restoreWindow(appId);
      } else if (win.classList.contains('active')) {
        this.minimizeWindow(appId);
      } else {
        this.focusWindow(appId);
      }
    });

    this.taskbarContainer.appendChild(tile);
  }

  focusTaskbarTile(appId) {
    // Remove active class from all taskbar tiles
    this.taskbarContainer.querySelectorAll('.taskbar-app-tile').forEach(tile => {
      tile.classList.remove('active');
    });

    const tile = this.taskbarContainer.querySelector(`[data-app="${appId}"]`);
    if (tile) tile.classList.add('active');
  }

  removeTaskbarTile(appId) {
    const tile = this.taskbarContainer.querySelector(`[data-app="${appId}"]`);
    if (tile) tile.remove();
  }
}
