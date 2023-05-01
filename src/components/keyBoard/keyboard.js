import elementCreator from '../../common/elementCreator';
import board from '../board/board';
import output from '../output/output';
import './styles.scss';

const keyboard = elementCreator('div', null, 'keyboard');
const langElement = elementCreator('div', null, 'lang', 'change language: left ctrl+shift')
keyboard.append(output, langElement, board);

export default keyboard;
