import { randomNumber } from './randomNumber';

export const generatePositionY = () => {
  const minY = 10;
  const maxY = 75;

  generatePositionY.value = randomNumber(minY, maxY) + '%';
  return generatePositionY.value;
}

export const generatePositionX = () => {
  const minX = 5;
  const maxX = 95;

  generatePositionX.value = randomNumber(minX, maxX) + '%';
  return generatePositionX.value;
}
