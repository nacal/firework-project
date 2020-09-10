export const lineLength = (positionY) => {
  return window.innerHeight * (100 - positionY.replace(/[^0-9]/g, '')) * 0.005;
}
