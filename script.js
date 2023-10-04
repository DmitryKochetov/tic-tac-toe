let cont = document.querySelector(".container");
let winnerBanner = document.querySelector(".winnerBanner");

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let el;
let marker = "X";
let xPosition = 0;
let yPosition = 0;
let movesCounter = 0;

for (let index = 0; index < 9; index++) {
  if (xPosition == 3) {
    xPosition = 0;
    yPosition++;
  }

  el = document.createElement("div");
  cont.append(el);
  el.className = "square";
  el.xPositionOnBoard = xPosition;
  el.yPositionOnBoard = yPosition;

  xPosition++;

  el.addEventListener(`click`, (event) => {
    event.target.innerText = marker;
    if (marker == "X") {
      board[event.target.yPositionOnBoard][event.target.xPositionOnBoard] = 1;
    }else {
      board[event.target.yPositionOnBoard][event.target.xPositionOnBoard] = 4;
    }
    console.log(board);

    if (movesCounter % 2 === 0) {
      marker = "0";
      movesCounter++;
    } else {
      marker = "X";
      movesCounter++;
    }
    if (winnerFound() == 1) {
      winnerBanner.innerText = "Победили X";
    }
    if (winnerFound() == 2) {
      winnerBanner.innerText = "Победили 0";
    }
  });
}

function winnerFound() {
  if (board[0][0] + board[0][1] + board[0][2] == 3) {
    return 1;
  }
  if (board[1][0] + board[1][1] + board[1][2] == 3) {
    return 1;
  }
  if (board[2][0] + board[2][1] + board[2][2] == 3) {
    return 1;
  }
  if (board[0][0] + board[1][0] + board[2][0] == 3) {
    return 1;
  }
  if (board[0][1] + board[1][1] + board[2][1] == 3) {
    return 1;
  }
  if (board[0][2] + board[1][2] + board[2][2] == 3) {
    return 1;
  }
  if (board[0][0] + board[1][1] + board[2][2] == 3) {
    return 1;
  }
  if (board[2][0] + board[1][1] + board[0][2] == 3) {
    return 1;
  }
  
  if (board[0][0] + board[0][1] + board[0][2] == 12) {
    return 2;
  }
  if (board[1][0] + board[1][1] + board[1][2] == 12) {
    return 2;
  }
  if (board[2][0] + board[2][1] + board[2][2] == 12) {
    return 2;
  }
  if (board[0][0] + board[1][0] + board[2][0] == 12) {
    return 2;
  }
  if (board[0][1] + board[1][1] + board[2][1] == 12) {
    return 2;
  }
  if (board[0][2] + board[1][2] + board[2][2] == 12) {
    return 2;
  }
  if (board[0][0] + board[1][1] + board[2][2] == 12) {
    return 2;
  }
  if (board[2][0] + board[1][1] + board[0][2] == 12) {
    return 2;
  }
  return false;
}
