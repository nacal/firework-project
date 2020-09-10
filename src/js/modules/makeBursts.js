import { generatePositionY, generatePositionX } from './generatePosition';
import { fireworkColorMain, fireworkColorSub } from './fireworkColor';
import { setDelay } from './setDelay';
import { randomNumber } from './randomNumber';
import { fireworkLuxury } from './fireworkLuxury';

export const makeBursts = () => {
  const STAGGER = mojs.stagger(mojs.Burst);
  const bursts = new STAGGER({
    radius: [80, 'rand(80, 100)', 'rand(80,120)', 'rand(80, 140)'],
    angle: ['rand(0, 180)'],
    top: generatePositionY.value,
    left: generatePositionX.value,
    quantifier: randomNumber(2, 4),
    count: fireworkLuxury(),
    children: {
      shape: 'line',
      radius: [60, 40],
      scale: 1,
      stroke: [fireworkColorMain.value, fireworkColorSub.value],
      strokeDasharray: '100%',
      strokeDashoffset: { '100%': '300%' },
      strokeOpacity: { 1: 0.25 },
      duration: [1700, 1600],
      delay: [1900 + setDelay.value, 1800 + setDelay.value],
      easing: 'ease.out',
    },
    onComplete() {
      this.generate();
    }
  });
  return bursts;
}
