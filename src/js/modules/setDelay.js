import { randomNumber } from './randomNumber';

export const setDelay = () => {
  const min = 0;
  const max = 5000;

  setDelay.value = randomNumber(min, max);
  return setDelay.value;
}
