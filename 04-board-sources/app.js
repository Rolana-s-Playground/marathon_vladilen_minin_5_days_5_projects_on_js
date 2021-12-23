const board = document.querySelector('#board');
const palettes = [
    ['#ec57ec', '#fdff5b', '#4284ff', '#83fffc', '#36ff59'],
    ['#afdad3', '#6bcabe', '#3cb1a7', '#219b90', '#108177'],
    ['#34a853', '#555555', '#f1c232', '#f44336', '#16537e'],
    ['#9bccda', '#febc4f', '#f1c2cf', '#d1a2d6', '#a91a26'],
    ['#0b3945', '#369099', '#9db979', '#e7922c', '#e66515'],
    ['#e3e8ea', '#bccad0', '#9ba8ae', '#707a7e', '#495054'],
];
const colors = getRandomPalette();
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });


    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function getRandomPalette() {
    const index = Math.floor(Math.random() * palettes.length);
    return palettes[index];
}