import elementCreator from '../../common/elementCreator';
import './styles.scss';

const output = elementCreator('textarea', null, 'output');

export const outputStore = {
  value: '',

  addValue(value) {
    this.value += value;
  },

  getValue() {
    return this.value;
  },

  removeLastChar() {
    this.value = this.value.slice(0, this.value.length);
  },
};

export default output;
