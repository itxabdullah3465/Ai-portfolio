// Calculator.js - Basic and Scientific Calculator App
export class Calculator {
  constructor(containerEl) {
    this.container = containerEl;
    this.currentInput = '0';
    this.formula = '';
    this.isScientific = false;

    this.init();
  }

  init() {
    this.renderLayout();
  }

  renderLayout() {
    this.container.innerHTML = `
      <div class="calc-container">
        <!-- Display -->
        <div class="calc-display-section">
          <div class="calc-formula" id="calc-formula">${this.formula}</div>
          <div class="calc-output" id="calc-output">${this.currentInput}</div>
        </div>

        <!-- Mode Toggle Header -->
        <div class="calc-modes-header">
          <button class="btn-calc-mode ${!this.isScientific ? 'active' : ''}" id="btn-mode-basic">Basic</button>
          <button class="btn-calc-mode ${this.isScientific ? 'active' : ''}" id="btn-mode-sci">Scientific</button>
        </div>

        <!-- Keypad Grid -->
        <div class="calc-buttons-grid ${this.isScientific ? 'scientific' : ''}" id="calc-keypad">
          <!-- Populated by JS -->
        </div>
      </div>
    `;

    this.formulaEl = this.container.querySelector('#calc-formula');
    this.outputEl = this.container.querySelector('#calc-output');
    this.keypadEl = this.container.querySelector('#calc-keypad');

    // Bind mode triggers
    this.container.querySelector('#btn-mode-basic').addEventListener('click', () => this.toggleMode(false));
    this.container.querySelector('#btn-mode-sci').addEventListener('click', () => this.toggleMode(true));

    this.renderButtons();
  }

  toggleMode(sci) {
    this.isScientific = sci;
    this.renderLayout();
  }

  renderButtons() {
    this.keypadEl.innerHTML = '';

    const basicKeys = [
      { label: 'C', type: 'clear' }, { label: '⌫', type: 'backspace' }, { label: '%', type: 'op', val: '%' }, { label: '/', type: 'op', val: '/' },
      { label: '7', type: 'num', val: '7' }, { label: '8', type: 'num', val: '8' }, { label: '9', type: 'num', val: '9' }, { label: '*', type: 'op', val: '*' },
      { label: '4', type: 'num', val: '4' }, { label: '5', type: 'num', val: '5' }, { label: '6', type: 'num', val: '6' }, { label: '-', type: 'op', val: '-' },
      { label: '1', type: 'num', val: '1' }, { label: '2', type: 'num', val: '2' }, { label: '3', type: 'num', val: '3' }, { label: '+', type: 'op', val: '+' },
      { label: '±', type: 'neg' }, { label: '0', type: 'num', val: '0' }, { label: '.', type: 'num', val: '.' }, { label: '=', type: 'eq' }
    ];

    const scientificKeys = [
      { label: 'sin', type: 'sci', val: 'Math.sin(' }, { label: 'cos', type: 'sci', val: 'Math.cos(' }, { label: 'tan', type: 'sci', val: 'Math.tan(' }, { label: 'C', type: 'clear' }, { label: '⌫', type: 'backspace' },
      { label: 'ln', type: 'sci', val: 'Math.log(' }, { label: 'log', type: 'sci', val: 'Math.log10(' }, { label: '√', type: 'sci', val: 'Math.sqrt(' }, { label: '^', type: 'op', val: '**' }, { label: '/', type: 'op', val: '/' },
      { label: 'π', type: 'num', val: 'Math.PI' }, { label: '7', type: 'num', val: '7' }, { label: '8', type: 'num', val: '8' }, { label: '9', type: 'num', val: '9' }, { label: '*', type: 'op', val: '*' },
      { label: 'e', type: 'num', val: 'Math.E' }, { label: '4', type: 'num', val: '4' }, { label: '5', type: 'num', val: '5' }, { label: '6', type: 'num', val: '6' }, { label: '-', type: 'op', val: '-' },
      { label: '(', type: 'num', val: '(' }, { label: '1', type: 'num', val: '1' }, { label: '2', type: 'num', val: '2' }, { label: '3', type: 'num', val: '3' }, { label: '+', type: 'op', val: '+' },
      { label: ')', type: 'num', val: ')' }, { label: '±', type: 'neg' }, { label: '0', type: 'num', val: '0' }, { label: '.', type: 'num', val: '.' }, { label: '=', type: 'eq' }
    ];

    const keys = this.isScientific ? scientificKeys : basicKeys;

    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'btn-calc';
      btn.textContent = k.label;

      if (k.type === 'op') btn.classList.add('op');
      if (k.type === 'eq') btn.classList.add('eq');
      if (k.type === 'sci') btn.classList.add('scientific-btn');

      btn.addEventListener('click', () => this.handleKeyPress(k));
      this.keypadEl.appendChild(btn);
    });
  }

  handleKeyPress(key) {
    switch (key.type) {
      case 'clear':
        this.currentInput = '0';
        this.formula = '';
        break;
      case 'backspace':
        if (this.currentInput.length > 1) {
          this.currentInput = this.currentInput.slice(0, -1);
        } else {
          this.currentInput = '0';
        }
        break;
      case 'num':
        if (this.currentInput === '0' && key.val !== '.') {
          this.currentInput = key.val;
        } else {
          this.currentInput += key.val;
        }
        break;
      case 'sci':
        if (this.currentInput === '0') {
          this.currentInput = key.val;
        } else {
          this.currentInput += key.val;
        }
        break;
      case 'op':
        this.formula += this.currentInput + ' ' + key.val + ' ';
        this.currentInput = '0';
        break;
      case 'neg':
        if (this.currentInput.startsWith('-')) {
          this.currentInput = this.currentInput.slice(1);
        } else if (this.currentInput !== '0') {
          this.currentInput = '-' + this.currentInput;
        }
        break;
      case 'eq':
        this.evaluateFormula();
        break;
    }

    this.updateDisplay();
  }

  evaluateFormula() {
    this.formula += this.currentInput;
    
    // Safety check matching parenthesis
    let openCount = (this.formula.match(/\(/g) || []).length;
    let closeCount = (this.formula.match(/\)/g) || []).length;
    if (openCount > closeCount) {
      this.formula += ')'.repeat(openCount - closeCount);
    }

    try {
      // Evaluate basic mathematical operations safely using custom Function constructor
      // Since it is client-only calculator and variables are strictly numeric + basic Math. methods,
      // it is a lightweight, reliable, and secure execution engine.
      const result = new Function(`return ${this.formula}`)();
      this.currentInput = String(parseFloat(result.toFixed(8)));
      this.formula = '';
    } catch (e) {
      this.currentInput = 'Error';
      this.formula = '';
    }
  }

  updateDisplay() {
    this.formulaEl.textContent = this.formula;
    this.outputEl.textContent = this.currentInput;
  }
}
