const playerLookup = {
    '1': `<span style="color: rgba(136, 143, 79, 1)">x</span>`,
    '-1': `<span style="color: rgba(164, 126, 182, 1)">o</span>`,
    'null': 'transparent'
}

let board;
let turn;
let winner;

const nueveEls = Array.from(document.querySelectorAll('#nueve > div'));

const tSwapEl = document.getElementById('tSwap');

document.getElementById('nueve').addEventListener('click', clickPlay);
document.getElementById('doOver').addEventListener('click', reDo);
document.getElementById('doOver').addEventListener('mouseenter', moEnt);
document.getElementById('doOver').addEventListener('mouseout', moExt);

init();

function init() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    turn = 1;
    winner = null;
    render();
}

function render() {
    if (winner) {
        if (winner === 'T') {
            tSwapEl.innerHTML = "it's a tie!"
        } else {
            tSwapEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn]}</span> Wins`;
        }
    } else {
        tSwapEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn]}'s</span> Turn`;
    }
}

function clickPlay(e) {
  
    turn *= -1;
    render();
}

function moEnt() {
    event.target.style.backgroundColor = 'rgba(84, 27, 33, 1)';
    event.target.style.color = 'rgba(231, 207, 138, 1)';
}

function moExt() {
    event.target.style.backgroundColor = 'transparent';
    event.target.style.color = 'rgba(84, 27, 33, 1)';
}

function reDo() {
    init();
}

