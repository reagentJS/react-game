import SIZES from '../constants/SIZES';
import MINES from '../constants/MINES';

export default function createField() {
  let board = Array(SIZES.fieldArea).fill(null).map((item, index) => ({
    id: index,
    x: index % SIZES.cols,
    y: Math.floor(index / SIZES.rows),
    isRevealed: false,
    isFlagged: false,
  }));

  board = setupMines(board);
  board.forEach((cell) => {
    if (cell.value !== 'x') {
      cell.value = calcNeigMines(board, cell.id, cell.x, cell.y);
    }
  });

  return board;
}

function setupMines(board) {
  let minesCounter = 0;

  while (minesCounter < MINES.quantity) {
    const randomIndex = Math.floor(Math.random() * SIZES.fieldArea);

    if (!board[randomIndex].value) {
      board[randomIndex].value = 'x';
      minesCounter++;
    }
  }

  return board;
}

function calcNeigMines(board, id, x, y) {
  let minesCounter = 0;

  if (x > 0) {
    if (board[id - 1].value === 'x') {
      minesCounter++;
    }
  }

  if (x < SIZES.cols - 1) {
    if (board[id + 1].value === 'x') {
      minesCounter++;
    }
  }

  if (y > 0) {
    if (board[id - SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (y < SIZES.rows - 1) {
    if (board[id + SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  // diagonals
  if (x > 0 && y > 0) {
    if (board[id - 1 - SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x > 0 && y < SIZES.rows - 1) {
    if (board[id - 1 + SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x < SIZES.cols - 1 && y > 0) {
    if (board[id + 1 - SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x < SIZES.cols - 1 && y < SIZES.rows - 1) {
    if (board[id + 1 + SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  return minesCounter || '';
}
