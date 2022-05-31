const screens = document.querySelectorAll('.screen');
const start = document.querySelector('.start');
const btnSelectTime = document.querySelector('.time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('.board')

const color = ['red','black','green','yellow','orange','brown','white'];
let selectTime = 0;
let time = 0;
let count = 0;

const newColor = () => {
    return Math.floor(Math.random() * color.length )
}

const newSize = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

start.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})

btnSelectTime.addEventListener('click', (e) => {
    if(e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

function startGame () {
    setInterval(decreaseTime, 1000)}
    createCircleElem();
    

function decreaseTime() {
    current = --time;
    if(time < 10) {
        timer.innerHTML = `00:0${time}`;
    } else {
        timer.innerHTML = `00:${time}`;
    } if(time <= -1) {
        finishGame();
    }
}

function finishGame() {

    timer.innerHTML = 'Game end';
    board.innerHTML = `<h1>Count is: <span class="primary">${count}</span></h1>`
}

function createCircleElem() {

    const circleItem = document.createElement('div');
    circleItem.classList.add('circle');
    board.append(circleItem);

    circleItem.addEventListener('click', () => {
        let randomSize = newSize(7,20);
        let {width, height} = board.getBoundingClientRect();

        let x = newSize(0, width - randomSize);
        let y = newSize(0, height - randomSize);

        circleItem.style.background = `${color[newColor()]}`
        circleItem.style.height = `${randomSize}px`;
        circleItem.style.width = `${randomSize}px`;
        circleItem.style.top = `${y}px`;
        circleItem.style.left = `${x}px`;
        count = count + 1;
    })
}

