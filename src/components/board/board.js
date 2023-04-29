import elementCreator from '../../common/elementCreator';
import dataRu from '../../common/lang/ru';
import dataEn from '../../common/lang/en';
import createButton, {btnMouseUpHandler} from '../button/button';
import output, { outputStore } from '../output/output';
import './styles.scss';

export const langStore = {
  toggleLang() {
    this.lang = this.lang === dataRu ? dataEn : dataRu
  },

  getLangData() {
    return this.lang;
  },

  setLang(lang) {
    this.lang = lang;
  }
}

const board = elementCreator('div', null, 'board');

langStore.setLang(dataRu);
let buttons = Object.entries(langStore.getLangData()).map(([code, key]) => {
  return createButton(key,  code, board)
});

const changeLang = () => {
langStore.toggleLang();
board.innerHTML = '';
buttons = Object.entries(langStore.getLangData()).map(([code, key]) => {
  return createButton(key,  code, board)
});

}

document.addEventListener('keydown', (e) => {
  const lightBtn = buttons.find((btn) => btn.getAttribute('currentcode') === e.code);
  lightBtn.classList.add('active');
});

document.addEventListener('keyup', (e) => {
  const lightBtn = buttons.find((btn) => btn.getAttribute('currentcode') === e.code);
  lightBtn.classList.remove('active');
  btnMouseUpHandler(e.code, e.key);
  if(e.ctrlKey + e.shiftKey) {
    changeLang();
  }
});



export default board;
