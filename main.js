var scoreH2 = document.querySelector(".score");
var scoreXSpan = document.querySelector(".display_scoreX");
var scoreOSpan = document.querySelector(".display_scoreO");
var turnH2 = document.querySelector(".whose_turn");
var displayPlayer = document.querySelector(".display_player");
var new_gameButton = document.querySelector(".new_game");
var resetButton = document.querySelector(".reset");
var oneDiv = document.querySelector(".one");
var twoDiv = document.querySelector(".two");
var threeDiv = document.querySelector(".three");
var fourDiv = document.querySelector(".four");
var fiveDiv = document.querySelector(".five");
var sixDiv = document.querySelector(".six");
var sevenDiv = document.querySelector(".seven");
var eightDiv = document.querySelector(".eight");
var nineDiv = document.querySelector(".nine");
//
var gameOngoing = true;
var playerX = true; // x goes first
var winner = null;
var scoreX = 0;
var scoreO = 0;
//

function currentGameStatus(e) {
  let locationOne = document
    .getElementsByClassName("one")[0]
    .getElementsByClassName("xo")[0];
  let locationTwo = document
    .getElementsByClassName("two")[0]
    .getElementsByClassName("xo")[0];
  let locationThree = document
    .getElementsByClassName("three")[0]
    .getElementsByClassName("xo")[0];
  let locationFour = document
    .getElementsByClassName("four")[0]
    .getElementsByClassName("xo")[0];
  let locationFive = document
    .getElementsByClassName("five")[0]
    .getElementsByClassName("xo")[0];
  let locationSix = document
    .getElementsByClassName("six")[0]
    .getElementsByClassName("xo")[0];
  let locationSeven = document
    .getElementsByClassName("seven")[0]
    .getElementsByClassName("xo")[0];
  let locationEight = document
    .getElementsByClassName("eight")[0]
    .getElementsByClassName("xo")[0];
  let locationNine = document
    .getElementsByClassName("nine")[0]
    .getElementsByClassName("xo")[0];
  var one = locationOne.innerHTML;
  var two = locationTwo.innerHTML;
  var three = locationThree.innerHTML;
  var four = locationFour.innerHTML;
  var five = locationFive.innerHTML;
  var six = locationSix.innerHTML;
  var seven = locationSeven.innerHTML;
  var eight = locationEight.innerHTML;
  var nine = locationNine.innerHTML;

  if (one && one === four && one === seven && gameOngoing === true) {
    gameOngoing = false;
    winner = one;
    if (one === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (one === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (two && two === five && two === eight && gameOngoing === true) {
    gameOngoing = false;
    winner = two;
    if (two === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (two === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (three && three === six && three === nine && gameOngoing === true) {
    gameOngoing = false;
    winner = three;
    if (three === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (three === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (one && one === two && one === three && gameOngoing === true) {
    gameOngoing = false;
    winner = one;
    if (one === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (one === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (four && four === five && four === six && gameOngoing === true) {
    gameOngoing = false;
    winner = four;
    if (four === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (four === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (
    seven &&
    seven === eight &&
    seven === nine &&
    gameOngoing === true
  ) {
    gameOngoing = false;
    winner = seven;
    if (seven === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (seven === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (one && one === five && one === nine && gameOngoing === true) {
    gameOngoing = false;
    winner = one;
    if (one === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (one === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  } else if (
    seven &&
    seven === five &&
    seven === three &&
    gameOngoing === true
  ) {
    gameOngoing = false;
    winner = seven;
    if (seven === "X") {
      scoreX = scoreX + 1;
      scoreXSpan.innerHTML = `${scoreX}`;
    } else if (seven === "O") {
      scoreO = scoreO + 1;
      scoreOSpan.innerHTML = `${scoreO}`;
    }
  }
  if (gameOngoing === false) {
    return;
  }
}

function new_gameHandler(e) {
  gameOngoing = true;

  // Set player to X
  playerX = true;
  document.getElementsByClassName("display_player")[0].innerHTML = "X";

  // Clear board
  clearBoard();
}

function resetHandler(e) {
  // location.reload();
  gameOngoing = true;

  // Set player to X and initialize scores again
  playerX = true;
  scoreX = 0;
  scoreO = 0;
  document.getElementsByClassName("display_player")[0].innerHTML = "X";
  document.getElementsByClassName("display_scoreX")[0].innerHTML = "0";
  document.getElementsByClassName("display_scoreO")[0].innerHTML = "0";

  // Clear board
  clearBoard();
}

function oneDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".one .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function twoDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".two .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function threeDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".three .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function fourDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".four .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function fiveDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".five .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function sixDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".six .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function sevenDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".seven .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function eightDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".eight .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function nineDivHandler(e) {
  let location = e.target.querySelector(".xo");
  location = document.querySelector(".nine .xo");

  if (
    location.innerHTML === "X" ||
    location.innerHTML === "O" ||
    gameOngoing === false
  ) {
    return;
  }
  if (playerX) {
    location.innerHTML = "X";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "O";
  } else {
    location.innerHTML = "O";
    playerX = !playerX;
    currentGameStatus();
    document.querySelector(".display_player").innerHTML = "X";
  }
}

function clearBoard(e) {
  document
    .getElementsByClassName("one")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("two")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("three")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("four")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("five")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("six")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("seven")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("eight")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
  document
    .getElementsByClassName("nine")[0]
    .getElementsByClassName("xo")[0].innerHTML = "";
}

// Initialize values
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementsByClassName("display_player")[0].innerHTML = "X";
  document.getElementsByClassName("display_scoreX")[0].innerHTML = "0";
  document.getElementsByClassName("display_scoreO")[0].innerHTML = "0";
});

if (new_gameButton) {
  new_gameButton.addEventListener("click", new_gameHandler);
}
if (resetButton) {
  resetButton.addEventListener("click", resetHandler);
}

if (gameOngoing === true) {
  if (oneDiv) {
    oneDiv.addEventListener("click", oneDivHandler);
  }
  if (twoDiv) {
    twoDiv.addEventListener("click", twoDivHandler);
  }
  if (threeDiv) {
    threeDiv.addEventListener("click", threeDivHandler);
  }
  if (fourDiv) {
    fourDiv.addEventListener("click", fourDivHandler);
  }
  if (fiveDiv) {
    fiveDiv.addEventListener("click", fiveDivHandler);
  }
  if (sixDiv) {
    sixDiv.addEventListener("click", sixDivHandler);
  }
  if (sevenDiv) {
    sevenDiv.addEventListener("click", sevenDivHandler);
  }
  if (eightDiv) {
    eightDiv.addEventListener("click", eightDivHandler);
  }
  if (nineDiv) {
    nineDiv.addEventListener("click", nineDivHandler);
  }
}
