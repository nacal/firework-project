import { color } from './color';

export const fireworkColorMain = () => {
  fireworkColorMain.value = color[Math.floor(Math.random() * color.length)][0];
  return fireworkColorMain.value;
}

export const fireworkColorSub = () => {
  fireworkColorSub.value = color[Math.floor(Math.random() * color.length)][1];
  return fireworkColorSub.value;
}
