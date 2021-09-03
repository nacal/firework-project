import { generatePositionY, generatePositionX } from './generatePosition';
import { fireworkColorMain } from './fireworkColor';
import { setDelay } from './setDelay';
import { lineLength } from './lineLength';

export const makeLine = () => {
  const line = new mojs.Shape({
    y: '50%',
    top: generatePositionY.value,
    left: generatePositionX.value,
    shape: 'line',
    radius: lineLength(generatePositionY.value),
    scale: 1,
    rotate: 90,
    stroke: fireworkColorMain(),
    strokeDasharray: '50% 150%',
    strokeDashoffset: { '-100%': '100%' },
    strokeOpacity: { 1: -0.25 },
    duration: 2500,
    delay: setDelay.value,
    easing: 'ease.inout',
    onComplete() {
      this.generate();
    }
  });
  return line;
}
