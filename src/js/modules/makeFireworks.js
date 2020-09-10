import { makeFirework } from './makeFirework';

export const makeFireworks = (n) => {
  for (let i = 1; i <= n; i++) {
    makeFirework();
  }
}
