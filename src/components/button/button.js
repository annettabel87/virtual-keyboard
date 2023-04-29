import output, { outputStore } from '../output/output';
import elementCreator from '../../common/elementCreator';
import './styles.scss';

const bigButtons = ['Space'];
const noCharCode = ['Shift', 'Tab', 'CapsLock', 'Backspace', 'Enter', 'ShiftLeft', 'ControlLeft',
    'AltLeft', 'AltRight', 'ControlRight'];

export function btnMouseUpHandler(code, key) {
    if (!noCharCode.includes(code)) {
        outputStore.addValue(key);
        output.textContent = outputStore.getValue();
    }
}

const createButton = (key, code, parent) => {
    const btn = elementCreator('button', parent, bigButtons.includes(code) ? 'bigButton' : 'button', key);
    btn.setAttribute('currentKey', key);
    btn.setAttribute('currentCode', code);

    btn.addEventListener('mousedown', () => {
        btn.classList.add('active');
    })

    btn.addEventListener('mouseup', () => {
        btnMouseUpHandler(btn.getAttribute('currentCode'), btn.getAttribute('currentKey'));
        btn.classList.remove('active');
        console.log(btn.code);
        if (btn.getAttribute('currentCode') === 'Backspace') {
            outputStore.removeLastChar();
            output.textContent = outputStore.getValue();
          }
          if (btn.getAttribute('currentCode') === 'CapsLock') {
            outputStore.toggleCapsLock();
          }
    });

    return btn;
}

export default createButton;