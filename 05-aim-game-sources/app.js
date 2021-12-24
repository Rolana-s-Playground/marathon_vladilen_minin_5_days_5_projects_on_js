const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;
const palettes = [
    ['#ec57ec', '#fdff5b', '#4284ff', '#83fffc', '#36ff59'],
    ['#afdad3', '#6bcabe', '#3cb1a7', '#219b90', '#108177'],
    ['#34a853', '#555555', '#f1c232', '#f44336', '#16537e'],
    ['#9bccda', '#febc4f', '#f1c2cf', '#d1a2d6', '#a91a26'],
    ['#0b3945', '#369099', '#9db979', '#e7922c', '#e66515'],
    ['#e3e8ea', '#bccad0', '#9ba8ae', '#707a7e', '#495054'],
];
const colors = getRandomPalette();

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.attributes['data-time'].value);
       startGame();
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    screens[1].classList.add('up');
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        return finishGame();
    }

    let currentTime = --time;

    if (currentTime < 10) {
        currentTime = `0${currentTime}`;
    }
    setTime(currentTime);
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`
    const circle = document.createElement('div');

}

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    const size = getRandomNumber(10,60);
    const { width, height } = board.getBoundingClientRect();

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = getRandomColor();

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomPalette() {
    const index = getRandomNumber(0, palettes.length);
    return palettes[index];
}

function getRandomColor() {
    const index = getRandomNumber(0, colors.length);
    return colors[index];
}
