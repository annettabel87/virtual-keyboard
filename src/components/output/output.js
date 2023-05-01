import elementCreator from '../../common/elementCreator';
import './styles.scss';

const output = elementCreator('textarea', null, 'output');

export const outputStore = {
  value: '',
  capsLock: false,

  addValue(value) {
    this.value += this.capsLock ? value.toUpperCase() : value;
  },

  getValue() {
    return this.value;
  },

  removeLastChar() {
    this.value = this.value.slice(0, -1);
  },

  toggleCapsLock() {
    this.capsLock = !this.capsLock;
  },
};

export default output;
