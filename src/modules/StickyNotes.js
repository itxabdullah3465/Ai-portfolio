// StickyNotes.js - Desktop Sticky Notes CRUD & LocalStorage save
export class StickyNotes {
  constructor(desktopEl, triggerAddBtnId) {
    this.desktop = desktopEl;
    this.notes = JSON.parse(localStorage.getItem('os_sticky_notes')) || [];
    
    // Bind triggers
    const addBtn = document.getElementById(triggerAddBtnId);
    if (addBtn) {
      addBtn.addEventListener('click', () => this.createNewNote());
    }

    this.init();
  }

  init() {
    // Spawn saved notes
    if (this.notes.length === 0) {
      // Spawn one default note if first time
      this.createNewNote('Welcome! Double click here to write note. Click the dots to change colors.', 'yellow', 150, 150);
    } else {
      this.notes.forEach(note => this.renderNoteDOM(note));
    }
  }

  createNewNote(content = '', color = 'yellow', x = null, y = null) {
    const desktopWidth = window.innerWidth;
    const desktopHeight = window.innerHeight;

    const note = {
      id: `note-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      content,
      color,
      x: x !== null ? x : Math.floor(Math.random() * (desktopWidth - 250)),
      y: y !== null ? y : Math.floor(Math.random() * (desktopHeight - 300))
    };

    this.notes.push(note);
    this.saveNotes();
    this.renderNoteDOM(note);
  }

  renderNoteDOM(note) {
    const noteEl = document.createElement('div');
    noteEl.className = `sticky-note ${note.color}`;
    noteEl.id = note.id;
    noteEl.style.left = `${note.x}px`;
    noteEl.style.top = `${note.y}px`;

    noteEl.innerHTML = `
      <div class="sticky-note-header">
        <div class="sticky-note-color-picker">
          <div class="color-dot yellow" data-color="yellow" style="background:#fef08a;"></div>
          <div class="color-dot blue" data-color="blue" style="background:#bfdbfe;"></div>
          <div class="color-dot pink" data-color="pink" style="background:#fbcfe8;"></div>
          <div class="color-dot green" data-color="green" style="background:#bbf7d0;"></div>
          <div class="color-dot purple" data-color="purple" style="background:#e9d5ff;"></div>
        </div>
        <div class="sticky-note-close">&times;</div>
      </div>
      <textarea class="sticky-note-body" placeholder="Write something...">${note.content}</textarea>
    `;

    this.desktop.appendChild(noteEl);

    // Setup event listeners
    this.setupNoteEvents(noteEl, note);
  }

  setupNoteEvents(el, note) {
    const header = el.querySelector('.sticky-note-header');
    const body = el.querySelector('.sticky-note-body');
    const closeBtn = el.querySelector('.sticky-note-close');
    const colorDots = el.querySelectorAll('.color-dot');

    // Drag note
    header.addEventListener('mousedown', (e) => {
      e.preventDefault();
      // Bring note to front of other widgets by adjusting z-index
      el.style.zIndex = 1000;
      
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = parseFloat(el.style.left);
      const startTop = parseFloat(el.style.top);

      const mouseMoveHandler = (moveEvent) => {
        let newLeft = startLeft + (moveEvent.clientX - startX);
        let newTop = startTop + (moveEvent.clientY - startY);

        // Keep inside desktop bounds roughly
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 220));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - 220));

        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
        
        note.x = newLeft;
        note.y = newTop;
      };

      const mouseUpHandler = () => {
        el.style.zIndex = 10; // restore default widget z-index
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
        this.saveNotes();
      };

      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', mouseUpHandler);
    });

    // Content auto-save on typing
    body.addEventListener('input', () => {
      note.content = body.value;
      this.saveNotes();
    });

    // Change color dots click
    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const color = dot.getAttribute('data-color');
        el.className = `sticky-note ${color}`;
        note.color = color;
        this.saveNotes();
      });
    });

    // Close / Delete note
    closeBtn.addEventListener('click', () => {
      el.remove();
      this.notes = this.notes.filter(n => n.id !== note.id);
      this.saveNotes();
    });
  }

  saveNotes() {
    localStorage.setItem('os_sticky_notes', JSON.stringify(this.notes));
  }
}
