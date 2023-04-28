import elementCreator from '../../common/elementCreator';
import board from '../board/board';
import output from '../output/output';
import './styles.scss';

const keyboard = elementCreator('div', null, 'keyboard');
keyboard.append(output, board);

export default keyboard;
