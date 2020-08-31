const color = [
  ['#d90000', '#ff5259'],
  ['#de0066', '#fe58ca'],
  ['#3f00e7', '#9462ff'],
  ['#009ccd', '#22dbff'],
  ['#b78500', '#ffdb4f'],
  ['#00c435', '#00ff99'],
];

let positionX;
let positionY;
let fireworkColorMain;
let fireworkColorSub;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('touchmove', (event) => {
  event.preventDefault();
}, { passive: false });

const GeneratePositionY = () => {
  const minY = 10;
  const maxY = 75;

  return randomNumber(minY, maxY) + '%';
}

const GeneratePositionX = () => {
  const minX = 5;
  const maxX = 95;

  return randomNumber(minX, maxX) + '%';
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const lineLength = () => {
  return window.innerHeight * (100 - positionY.replace(/[^0-9]/g, '')) * 0.005;
}

const fireworkLuxury = () => {
  const array = [16, 24, 32];
  return array[Math.floor(Math.random() * array.length)];
}

const fireworkColor = (n) => {
  const fireworkColor = color[Math.floor(Math.random() * color.length)];
  if (n == 'main') {
    return fireworkColor[0];
  } else if (n == 'sub') {
    return fireworkColor[1];
  }
}

const setStyle = () => {
  positionX = GeneratePositionX();
  positionY = GeneratePositionY();
  fireworkColorMain = fireworkColor('main');
  fireworkColorSub = fireworkColor('sub');
}

const makeLine = (delay) => {
  const line = new mojs.Shape({
    y: '50%',
    top: positionY,
    left: positionX,
    shape: 'line',
    radius: lineLength(),
    scale: 1,
    angle: 90,
    stroke: fireworkColorMain,
    strokeDasharray: '50% 150%',
    strokeDashoffset: { '-100%': '100%' },
    strokeOpacity: { 1: -0.25 },
    duration: 2500,
    delay: delay,
    easing: 'ease.inout',
    onComplete() {
      this.generate();
    }
  });
  return line;
}

const makeCircle = (delay) => {
  const circle = new mojs.Shape({
    radius: 3,
    shape: 'circle',
    scale: { 0: 1 },
    top: positionY,
    left: positionX,
    stroke: { fireworkColorSub: fireworkColorMain },
    strokeWidth: 3,
    duration: 300,
    delay: 1200 + delay,
    fill: 'transparent',
  }).then({
    scale: 2,
    strokeWidth: 0,

  });

  return circle;
}

const makeBursts = (delay) => {
  const STAGGER = mojs.stagger(mojs.Burst);
  const bursts = new STAGGER({
    radius: [80, 'rand(80, 100)', 'rand(80,120)', 'rand(80, 140)'],
    angle: ['rand(0, 180)'],
    top: positionY,
    left: positionX,
    quantifier: randomNumber(2, 4),
    count: fireworkLuxury(),
    children: {
      shape: 'line',
      radius: [60, 40],
      scale: 1,
      stroke: [fireworkColorMain, fireworkColorSub],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%': '100%' },
      strokeOpacity: { 1: 0.25 },
      duration: [1200, 1100],
      delay: [1900 + delay, 1800 + delay],
      easing: 'ease.out',
    },
    onComplete() {
      this.generate();
    }
  });
  return bursts;
}

const makeFirework = () => {

  positionX = GeneratePositionX();
  positionY = GeneratePositionY();
  fireworkColorMain = fireworkColor('main');
  fireworkColorSub = fireworkColor('sub');

  const delay = randomNumber(1000, 5000);
  const line = makeLine(delay);
  const circle = makeCircle(delay);
  const bursts = makeBursts(delay);


  const TIMELINE = new mojs.Timeline({
    onComplete() {
      line
        .tune({
          top: positionY,
          left: positionX,
          radius: lineLength(),
          stroke: fireworkColorMain,
        })
      circle
        .tune({
          top: positionY,
          left: positionX,
          stroke: { fireworkColorSub: fireworkColorMain },
        })
      bursts
        .tune({
          top: positionY,
          left: positionX,
          children: {
            stroke: [fireworkColorMain, fireworkColorSub],
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

const firework1 = makeFirework();
const firework2 = makeFirework();
const firework3 = makeFirework();
const firework4 = makeFirework();
const firework5 = makeFirework();
