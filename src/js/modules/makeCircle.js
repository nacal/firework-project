import { generatePositionY, generatePositionX } from './generatePosition';
import { fireworkColorMain } from './fireworkColor';
import { setDelay } from './setDelay';

export const makeCircle = () => {
  const circle = new mojs.Shape({
    radius: 3,
    shape: 'circle',
    scale: { 0: 1 },
    top: generatePositionY.value,
    left: generatePositionX.value,
    stroke: fireworkColorMain.value,
    strokeWidth: 3,
    duration: 300,
    delay: 1200 + setDelay.value,
    fill: 'transparent',
  }).then({
    scale: 2,
    strokeWidth: 0,
  });
  return circle;
}
