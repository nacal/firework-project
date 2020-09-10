import { setStyle } from './setStyle'
import { makeLine } from './makeLine';
import { makeCircle } from './makeCircle';
import { makeBursts } from './makeBursts';
import { generatePositionY, generatePositionX } from './generatePosition';
import { fireworkColorMain, fireworkColorSub } from './fireworkColor';
import { lineLength } from './lineLength';

export const makeFirework = () => {

  setStyle();

  const line = makeLine();
  const circle = makeCircle();
  const bursts = makeBursts();


  const TIMELINE = new mojs.Timeline({
    onComplete() {
      line
        .tune({
          top: generatePositionY.value,
          left: generatePositionX.value,
          radius: lineLength(generatePositionY.value),
          stroke: fireworkColorMain.value,
        })
      circle
        .tune({
          top: generatePositionY.value,
          left: generatePositionX.value,
          stroke: fireworkColorMain.value,
        })
      bursts
        .tune({
          top: generatePositionY.value,
          left: generatePositionX.value,
          children: {
            stroke: [fireworkColorMain.value, fireworkColorSub.value],
          }
        })
      setStyle();
      this.replay();
    }
  });

  TIMELINE.add(line, bursts, circle);
  setStyle();
  TIMELINE.play();

  return TIMELINE;
}
