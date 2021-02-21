import SIZES from '../constants/SIZES';

export default function createField(mines) {
  let board = Array(SIZES.fieldArea).fill(null).map((item, index) => ({
    id: index,
    x: index % SIZES.cols,
    y: Math.floor(index / SIZES.rows),
    isRevealed: false,
    isFlagged: false,
  }));

  board = setupMines(board, mines);
  board.forEach((cell) => {
    if (cell.value !== 'x') {
      cell.value = calcNeigMines(board, cell.id, cell.x, cell.y);
    }
  });

  return board;
}

function setupMines(board, mines) {
  let minesCounter = 0;
  const localMines = checkminesQuantity(mines);

  while (minesCounter < localMines) {
    const randomIndex = Math.floor(Math.random() * SIZES.fieldArea);

    if (!board[randomIndex].value) {
      board[randomIndex].value = 'x';
      minesCounter++;
    }
  }

  return board;
}

function checkminesQuantity(mines) {
  const minesLimit = Math.floor(SIZES.fieldArea * 2 / 3);

  return mines > minesLimit
    ? minesLimit
    : mines;
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
