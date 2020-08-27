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
let quantifier;


const GeneratePositionY = () => {
  const minY = 10;
  const maxY = 75;

  return randomPercent(minY, maxY);
}

const GeneratePositionX = () => {
  const minX = 5;
  const maxX = 95;

  return randomPercent(minX, maxX);
}

const randomPercent = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min + '%';
}

const randomQuantifier = () => {
  return Math.floor(Math.random() * 3) + 1;
}

const lineHeight = () => {
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

positionX = GeneratePositionX();
positionY = GeneratePositionY();
fireworkColorMain = fireworkColor('main');
fireworkColorSub = fireworkColor('sub');
quantifier = randomQuantifier();




const line = new mojs.Shape({
  y: '50%',
  top: positionY,
  left: positionX,
  shape: 'line',
  radius: lineHeight(),
  scale: 1,
  angle: 90,
  stroke: fireworkColorMain,
  strokeDasharray: '50% 150%',
  strokeDashoffset: { '-100%': '100%' },
  strokeOpacity: { 1: -0.25 },
  duration: 2500,
  easing: 'ease.inout',
  onComplete() {
    this.generate();
  }
});

const circle = new mojs.Shape({
  radius: 3,
  shape: 'circle',
  scale: { 0: 1 },
  top: positionY,
  left: positionX,
  stroke: fireworkColorMain,
  strokeWidth: 3,
  duration: 300,
  delay: 1200,
  fill: 'transparent',
}).then({
  scale: 2,
  strokeWidth: 0,
  stroke: fireworkColorSub,
});

const STAGGER = mojs.stagger(mojs.Burst);
const BURSTS = new STAGGER({
  radius: ['rand(60, 140)', 'rand(100, 220)'],
  angle: ['rand(30, 180)'],
  top: positionY,
  left: positionX,
  quantifier: randomQuantifier(),
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
    delay: [1900, 1800],
    easing: 'ease.out',
  },
  onComplete() {
    this.generate();
  }
});


const TIMELINE = new mojs.Timeline({
  onComplete() {
    line
      .tune({
        top: positionY,
        left: positionX,
        radius: lineHeight(),
        stroke: fireworkColorMain
      })
    circle
      .tune({
        top: positionY,
        left: positionX,
        stroke: fireworkColorMain,
      }).then({
        stroke: fireworkColorSub,
      })
    BURSTS
      .tune({
        top: positionY,
        left: positionX,
        children: {
          stroke: [fireworkColorMain, fireworkColorSub]
        }
      })
    setStyle();
    this.replay();
  }
});

TIMELINE.add(line, BURSTS, circle);
setStyle();
TIMELINE.play();




const line2 = new mojs.Shape({
  y: '50%',
  top: positionY,
  left: positionX,
  radius: lineHeight(),
  stroke: fireworkColorMain,
  shape: 'line',
  scale: 1,
  angle: 90,
  strokeDasharray: '50% 150%',
  strokeDashoffset: { '-100%': '100%' },
  strokeOpacity: { 1: -0.25 },
  duration: 2500,
  delay: 400,
  easing: 'ease.inout',
  onComplete() {
    this.generate();
  }
});

const circle2 = new mojs.Shape({
  radius: 3,
  shape: 'circle',
  scale: { 0: 1 },
  top: positionY,
  left: positionX,
  stroke: fireworkColorMain,
  strokeWidth: 3,
  duration: 300,
  delay: 1600,
  fill: 'transparent',
}).then({
  scale: 2,
  strokeWidth: 0,
  stroke: fireworkColorSub,
});

const STAGGER2 = mojs.stagger(mojs.Burst);
const BURSTS2 = new STAGGER2({
  top: positionY,
  left: positionX,
  radius: ['rand(80, 140)', 'rand(100, 220)'],
  angle: ['rand(0, 180)'],
  count: fireworkLuxury(),
  quantifier: randomQuantifier(),
  children: {
    shape: 'line',
    radius: [60, 40],
    scale: 1,
    stroke: [fireworkColorMain, fireworkColorSub],
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    strokeOpacity: { 1: 0.25 },
    duration: [1200, 1100],
    delay: [2300, 2200],
    easing: 'ease.out',
  },
  onComplete() {
    this.generate();
  }
});


const TIMELINE2 = new mojs.Timeline({
  onComplete() {
    line2
      .tune({
        top: positionY,
        left: positionX,
        radius: lineHeight(),
        stroke: fireworkColorMain
      })
    circle2
      .tune({
        top: positionY,
        left: positionX,
        stroke: fireworkColorMain,
      }).then({
        stroke: fireworkColorSub,
      })
    BURSTS2
      .tune({
        top: positionY,
        left: positionX,
        children: {
          stroke: [fireworkColorMain, fireworkColorSub]
        }
      })
    setStyle();
    this.replay();
  }
});
TIMELINE2.add(line2, BURSTS2, circle2);
setStyle();
TIMELINE2.play();



const line3 = new mojs.Shape({
  y: '50%',
  top: positionY,
  left: positionX,
  radius: lineHeight(),
  stroke: fireworkColorMain,
  shape: 'line',
  scale: 1,
  angle: 90,
  strokeDasharray: '50% 150%',
  strokeDashoffset: { '-100%': '100%' },
  strokeOpacity: { 1: -0.25 },
  duration: 2500,
  delay: 1000,
  easing: 'ease.inout',
  onComplete() {
    this.generate();
  }
});

const circle3 = new mojs.Shape({
  top: positionY,
  left: positionX,
  stroke: fireworkColorMain,
  radius: 3,
  shape: 'circle',
  scale: { 0: 1 },
  strokeWidth: 3,
  duration: 300,
  delay: 2200,
  fill: 'transparent',
}).then({
  scale: 2,
  strokeWidth: 0,
  stroke: fireworkColorSub,
});

const STAGGER3 = mojs.stagger(mojs.Burst);
const BURSTS3 = new STAGGER3({
  top: positionY,
  left: positionX,
  radius: ['rand(80, 140)', 'rand(100, 220)'],
  angle: ['rand(0, 180)'],
  count: fireworkLuxury(),
  quantifier: randomQuantifier(),
  children: {
    shape: 'line',
    radius: [60, 40],
    scale: 1,
    stroke: [fireworkColorMain, fireworkColorSub],
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    strokeOpacity: { 1: 0.25 },
    duration: [1200, 1100],
    delay: [2900, 2800],
    easing: 'ease.out',
  },
  onComplete() {
    this.generate();
  }
});


const TIMELINE3 = new mojs.Timeline({
  onComplete() {
    line3
      .tune({
        top: positionY,
        left: positionX,
        radius: lineHeight(),
        stroke: fireworkColorMain
      })
    circle3
      .tune({
        top: positionY,
        left: positionX,
        stroke: fireworkColorMain,
      }).then({
        stroke: fireworkColorSub,
      })
    BURSTS3
      .tune({
        top: positionY,
        left: positionX,
        children: {
          stroke: [fireworkColorMain, fireworkColorSub]
        }
      })
    setStyle();
    this.replay();
  }
});
TIMELINE3.add(line3, BURSTS3, circle3);
setStyle();
TIMELINE3.play();



const line4 = new mojs.Shape({
  y: '50%',
  top: positionY,
  left: positionX,
  shape: 'line',
  radius: lineHeight(),
  scale: 1,
  angle: 90,
  stroke: fireworkColorMain,
  strokeDasharray: '50% 150%',
  strokeDashoffset: { '-100%': '100%' },
  strokeOpacity: { 1: -0.25 },
  duration: 2500,
  delay: 1200,
  easing: 'ease.inout',
  onComplete() {
    this.generate();
  }
});

const circle4 = new mojs.Shape({
  radius: 3,
  shape: 'circle',
  scale: { 0: 1 },
  top: positionY,
  left: positionX,
  stroke: fireworkColorMain,
  strokeWidth: 3,
  duration: 300,
  delay: 2400,
  fill: 'transparent',
}).then({
  scale: 2,
  strokeWidth: 0,
  stroke: fireworkColorSub,
});

const STAGGER4 = mojs.stagger(mojs.Burst);
const BURSTS4 = new STAGGER4({
  radius: ['rand(60, 140)', 'rand(100, 220)'],
  angle: ['rand(30, 180)'],
  top: positionY,
  left: positionX,
  quantifier: randomQuantifier(),
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
    delay: [3100, 3000],
    easing: 'ease.out',
  },
  onComplete() {
    this.generate();
  }
});


const TIMELINE4 = new mojs.Timeline({
  onComplete() {
    line4
      .tune({
        top: positionY,
        left: positionX,
        radius: lineHeight(),
        stroke: fireworkColorMain
      })
    circle4
      .tune({
        top: positionY,
        left: positionX,
        stroke: fireworkColorMain,
      }).then({
        stroke: fireworkColorSub,
      })
    BURSTS4
      .tune({
        top: positionY,
        left: positionX,
        children: {
          stroke: [fireworkColorMain, fireworkColorSub]
        }
      })
    setStyle();
    this.replay();
  }
});

TIMELINE4.add(line4, BURSTS4, circle4);
setStyle();
TIMELINE4.play();
