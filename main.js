var turnH2 = document.querySelector('.whose_turn');
var new_gameButton = document.querySelector('.new_game');
var resetButton = document.querySelector('.reset')
var squareSpan = document.querySelectorAll('.xo');
//
var gameOngoing = true;
var playerX = true;
//

function new_gameHandler(e)  {
    console.log(e)
};

function resetHandler(e)  {
    console.log(e)
};

if (new_gameButton) { new_gameButton.addEventListener("click", new_gameHandler); }

if (resetButton) { resetButton.addEventListener('click', resetHandler); }

