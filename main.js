var turnH2 = document.querySelector('.whose_turn');
var new_gameButton = document.querySelector('.new_game');
var resetButton = document.querySelector('.reset')
var oneDiv = document.querySelector('.one');
var twoDiv = document.querySelector('.two');
var threeDiv = document.querySelector('.three');
var fourDiv = document.querySelector('.four');
var fiveDiv = document.querySelector('.five');
var sixDiv = document.querySelector('.six');
var sevenDiv = document.querySelector('.seven');
var eightDiv = document.querySelector('.eight');
var nineDiv = document.querySelector('.nine');
//
var gameOngoing = true;
var playerX = true;
//
function new_gameHandler(e)  {
    console.log(e);
};

function resetHandler(e)  {
    console.log(e);
};

function oneDivHandler(e) {
    const location = e.target.classList[0];

    if (e.target.classList[1] === 'O' || e.target.classList[1] === 'X') {
        return;
    }
    if (playerX) {
        e.target.classList.add('X');
        playerX = !playerX;
    }
    else {
        e.target.classList.add('O');
        playerX = !playerX;
    }
}

function twoDivHandler(e) {
    console.log(e)
}

function threeDivHandler(e) {
    console.log(e)
}

function fourDivHandler(e) {
    console.log(e)
}

function fiveDivHandler(e) {
    console.log(e)
}

function sixDivHandler(e) {
    console.log(e)
}

function sevenDivHandler(e) {
    console.log(e)
}

function eightDivHandler(e) {
    console.log(e)
}

function nineDivHandler(e) {
    console.log(e)
}


if (new_gameButton) { new_gameButton.addEventListener('click', new_gameHandler); }
if (resetButton) { resetButton.addEventListener('click', resetHandler); }
if (oneDiv) { oneDiv.addEventListener('click', oneDivHandler); }
if (twoDiv) { twoDiv.addEventListener('click', twoDivHandler); }
if (threeDiv) { threeDiv.addEventListener('click', threeDivHandler); }
if (fourDiv) { fourDiv.addEventListener('click', fourDivHandler); }
if (fiveDiv) { fiveDiv.addEventListener('click', fiveDivHandler); }
if (sixDiv) { sixDiv.addEventListener('click', sixDivHandler); }
if (sevenDiv) { sevenDiv.addEventListener('click', sevenDivHandler); }
if (eightDiv) { eightDiv.addEventListener('click', eightDivHandler); }
if (nineDiv) { nineDiv.addEventListener('click', nineDivHandler); }





