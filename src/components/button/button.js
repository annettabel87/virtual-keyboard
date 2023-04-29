import output, { outputStore } from '../output/output';
import elementCreator from '../../common/elementCreator';
import './styles.scss';

const bigButtons = ['Space'];

export function btnMouseUpHandler(code, key) {
    outputStore.addValue(key);
    output.textContent = outputStore.getValue();
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
    });

    return btn;
}
    
    export default  createButton;