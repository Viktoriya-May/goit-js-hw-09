// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

const RandomColor_DELAY = 1000;
let intervalId = null;
const body = document.body;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function startChangingColor() {
    startButton.disabled = true; 
    stopButton.disabled = false;
    intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, RandomColor_DELAY);
    }


function stopChangingColor() {
    startButton.disabled = false; 
    stopButton.disabked = true;
    clearInterval(intervalId);
}

