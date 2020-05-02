const playerLookup = {
    '1': '',
    '-1': '',
    'null': ''
}


let board;
let turn;
let winner;


const tSwapEl = document.getElementById('tSwap');


function init() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}


