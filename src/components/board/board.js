import elementCreator from '../../common/elementCreator';
import dataRu from '../../common/lang/ru';
import output, { outputStore } from '../output/output';
import './styles.scss';

const board = elementCreator('div', null, 'board');

function btnMouseUpHandler(code, key) {
  outputStore.addValue(key);
  output.textContent = outputStore.getValue();
}
const bigButtons = ['Space'];

const buttons = Object.entries(dataRu).map(([code, key]) => {
  const el = elementCreator('button', board, bigButtons.includes(code) ? 'bigButton' : 'button', key);
  el.setAttribute('currentKey', key);
  el.setAttribute('currentCode', code);
  return el;
});

buttons.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    btn.classList.add('active');
  });
  btn.addEventListener('mouseup', () => {
    btnMouseUpHandler(btn.getAttribute('currentCode'), btn.getAttribute('currentKey'));
    btn.classList.remove('active');
  });
});

document.addEventListener('keydown', (e) => {
  const lightBtn = buttons.find((btn) => btn.getAttribute('currentCode') === e.code);
  lightBtn.classList.add('active');
});

document.addEventListener('keyup', (e) => {
  const lightBtn = buttons.find((btn) => btn.getAttribute('currentCode') === e.code);
  lightBtn.classList.remove('active');
  btnMouseUpHandler(e.code, e.key);
});

export default board;
