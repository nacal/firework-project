import { makeFireworks } from './modules/makeFireworks';
import { setVh } from './modules/setVh';

setVh();
window.addEventListener('resize', () => {
  setVh();
});

makeFireworks(5);
