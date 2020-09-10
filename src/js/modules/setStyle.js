import { generatePositionY, generatePositionX } from './generatePosition';
import { fireworkColorMain, fireworkColorSub } from './fireworkColor';
import { setDelay } from './setDelay';

export const setStyle = () => {
  generatePositionX();
  generatePositionY();
  fireworkColorMain();
  fireworkColorSub();
  setDelay();
}
