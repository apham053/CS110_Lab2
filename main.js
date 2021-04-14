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
var playerX = true; // x goes first
//

function currentGameStatus(e) {
    let locationOne = (document.querySelector('.one .xo'));
    let locationTwo = (document.querySelector('.two .xo'));
    let locationThree = (document.querySelector('.three .xo'));
    let locationFour = (document.querySelector('.four .xo'));
    let locationFive = (document.querySelector('.five .xo'));
    let locationSix = (document.querySelector('.six .xo'));
    let locationSeven = (document.querySelector('.seven .xo'));
    let locationEight = (document.querySelector('.eight .xo'));
    let locationNine = (document.querySelector('.nine .xo'));
    var one = locationOne.classList[1];
    var two = locationTwo.classList[1];
    var three = locationThree.classList[1];
    var four = locationFour.classList[1];
    var five = locationFive.classList[1];
    var six = locationSix.classList[1];
    var seven = locationSeven.classList[1];
    var eight = locationEight.classList[1];
    var nine = locationNine.classList[1];
    console.log(one, two, three, four, five, six, seven, eight, nine);
}

//
function new_gameHandler(e)  {
    console.log(e);
};

function resetHandler(e)  {
    console.log(e);
};

function oneDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.one .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function twoDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.two .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function threeDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.three .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function fourDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.four .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function fiveDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.five .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function sixDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.six .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function sevenDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.seven .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function eightDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.eight .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
}

function nineDivHandler(e) {
    let location = e.target.querySelector('.xo');
    location = (document.querySelector('.nine .xo'));    

    if (location.classList.length > 1) {
        return;
    }
    if (playerX) {
        location.classList.add('X');
        currentGameStatus();
        playerX = !playerX;
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
    }
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





