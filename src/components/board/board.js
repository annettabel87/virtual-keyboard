import elementCreator from '../../common/elementCreator';
import { dataRu, dataRuShift } from '../../common/lang/ru';
import { dataEn, dataEnShift } from '../../common/lang/en';
import createButton, { btnMouseUpHandler } from '../button/button';
import output, { outputStore } from '../output/output';
import './styles.scss';

export const dataStore = {
  shift: false,

  toggleDataLang() {
    this.data = this.data === dataRu ? dataEn : dataRu;
    localStorage.setItem('lang', JSON.stringify(this.data));
  },

  toggleDatShift() {
    this.data = this.data === dataRu ?
      this.shift ? dataRuShift : dataRu : this.shift ? dataEnShift : dataEn;
    localStorage.setItem('lang', JSON.stringify(this.data));
  },

  getData() {
    return this.data;
  },

  setData(data) {
    localStorage.setItem('lang', JSON.stringify(data))
    this.data = data;
  },

  toggleShift() {
    this.shift = !this.shift;
  }
}

const board = elementCreator('div', null, 'board');

if (!localStorage.getItem('lang')) {
  dataStore.setData(dataRu);
} else {
  dataStore.setData(JSON.parse(localStorage.getItem('lang')));
}

let buttons = Object.entries(dataStore.getData()).map(([code, key]) => {
  return createButton(key, code, board)
});

const changeLang = () => {
  dataStore.toggleDataLang();
  board.innerHTML = '';
  buttons = Object.entries(dataStore.getData()).map(([code, key]) => {
    return createButton(key, code, board)
  });
}

const changeShift = () => {
  dataStore.toggleShift();
  dataStore.toggleDatShift();
  board.innerHTML = '';
  buttons = Object.entries(dataStore.getData()).map(([code, key]) => {
    return createButton(key, code, board)
  });
}

document.addEventListener('keydown', (e) => {
  const lightBtn = buttons.find((btn) => btn.getAttribute('currentcode') === e.code);
  lightBtn.classList.add('active');
  if (e.code === 'ShiftLeft') {
    changeShift();
  }
});

document.addEventListener('keyup', (e) => {
  const lightBtn = buttons.find((btn) => btn.getAttribute('currentcode') === e.code);
  lightBtn.classList.remove('active');
  btnMouseUpHandler(e.code, lightBtn.getAttribute('currentkey'));

  if (e.ctrlKey + e.shiftKey) {
    changeLang();
  }

  if (e.code === 'Backspace') {
    outputStore.removeLastChar();
    output.textContent = outputStore.getValue();
  }

  if (e.code === 'CapsLock') {
    outputStore.toggleCapsLock();
  }

  if (e.code === 'ShiftLeft') {
    changeShift();
  }

  if (e.code === 'Tab') {
    outputStore.addValue(' ');
    output.textContent = outputStore.getValue();
  }
});

export default board;
