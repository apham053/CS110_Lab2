var scoreH2 = document.querySelector('.score');
var scoreXSpan = document.querySelector('.display_scoreX');
var scoreOSpan = document.querySelector('.display_scoreO');
var turnH2 = document.querySelector('.whose_turn');
var displayPlayer = document.querySelector('.display_player');
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
var winner = null;
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
    //console.log(one, two, three, four, five, six, seven, eight, nine);
    var scoreX = 0;
    var scoreO = 0;

    if ((one) && (one === four) && (one === seven)) {
        gameOngoing = false;
        winner = one;
        if (one === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (one === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((two) && (two === five) && (two === eight)) {
        gameOngoing = false;
        winner = two;
        if (two === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (two === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((three) && (three === six) && (three === nine)) {
        gameOngoing = false;
        winner = three;
        if (three === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (three === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((one) && (one === two) && (one === three)) {
        gameOngoing = false;
        winner = one;
        if (one === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (one === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((four) && (four === five) && (four === six)) {
        gameOngoing = false;
        winner = four;
        if (four === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (four === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((seven) && (seven === eight) && (seven === nine)) {
        gameOngoing = false;
        winner = seven;
        if (seven === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (seven === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((one) && (one === five) && (one === nine)) {
        gameOngoing = false;
        winner = one;
        if (one === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (one === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }
    else if ((seven) && (seven === five) && (seven === three)) {
        gameOngoing = false;
        winner = seven;
        if (seven === 'X') {
            scoreX = scoreX + 1;
            scoreXSpan.innerHTML = `${scoreX}`;
        }
        else if (seven === 'O') {
            scoreO = scoreO + 1;
            scoreOSpan.innerHTML = `${scoreO}`;
        }
    }

}
//
function new_gameHandler(e)  {
    location.reload();
    document.querySelector(".one").innerHTML = "";
    document.querySelector(".two").innerHTML = "";
    document.querySelector(".three").innerHTML = "";
    document.querySelector(".four").innerHTML = "";
    document.querySelector(".five").innerHTML = "";
    document.querySelector(".six").innerHTML = "";
    document.querySelector(".seven").innerHTML = "";
    document.querySelector(".eight").innerHTML = "";
    document.querySelector(".nine").innerHTML = "";
};

function resetHandler(e)  {
    location.reload();
    document.getElementsByClassName("display_player")[0].innerHTML = "X"
    document.getElementsByClassName("display_scoreX")[0].innerHTML = "0"
    document.getElementsByClassName("display_scoreO")[0].innerHTML = "0"
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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
        document.querySelector(".display_player").innerHTML = "O";
    }
    else {
        location.classList.add('O');
        currentGameStatus();
        playerX = !playerX;
        document.querySelector(".display_player").innerHTML = "X";
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

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName("display_player")[0].innerHTML = "X"
    document.getElementsByClassName("display_scoreX")[0].innerHTML = "0"
    document.getElementsByClassName("display_scoreO")[0].innerHTML = "0"
  })
