const colors = [
    '#d87093',
    '#00d9ff',
    '#fa8072',
    '#9acd32',
    '#00ff7f',
    '#4682b4',
  ];

const startBtnEl = document.querySelector('button[data-action="start"]')
const stopBtnEl = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body')
let timeIntervalId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const onBackroundColorChange = () => {
    timeIntervalId = setInterval(() => {
        const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        bodyEl.style.backgroundColor = randomColor;
    }, 1000);
    startBtnEl.disabled = 'true';
}

const onStopBackroundColorChange = () => {
    clearInterval(timeIntervalId);
    startBtnEl.removeAttribute('disabled');
}

startBtnEl.addEventListener('click', onBackroundColorChange);
stopBtnEl.addEventListener('click', onStopBackroundColorChange);
