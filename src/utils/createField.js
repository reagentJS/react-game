export default function createField(rows, cols, mines) {
  let board = Array(rows * cols).fill(null).map((item, index) => ({
    id: index,
    x: index % cols,
    y: Math.floor(index / rows),
    isRevealed: false,
    isFlagged: false,
  }));

  board = setupMines(rows, cols, board, mines);
  board.forEach((cell) => {
    if (cell.value !== 'x') {
      cell.value = calcNeigMines(rows, cols, board, cell.id, cell.x, cell.y);
    }
  });

  return board;
}

function setupMines(rows, cols, board, mines) {
  let minesCounter = 0;
  const localMines = checkminesQuantity(rows, cols, mines);

  while (minesCounter < localMines) {
    const randomIndex = Math.floor(Math.random() * rows * cols);

    if (!board[randomIndex].value) {
      board[randomIndex].value = 'x';
      minesCounter++;
    }
  }

  return board;
}

function checkminesQuantity(rows, cols, mines) {
  const minesLimit = Math.floor(rows * cols * 2 / 3);

  return mines > minesLimit
    ? minesLimit
    : mines;
}

function calcNeigMines(rows, cols, board, id, x, y) {
  let minesCounter = 0;

  if (x > 0) {
    if (board[id - 1].value === 'x') {
      minesCounter++;
    }
  }

  if (x < cols - 1) {
    if (board[id + 1].value === 'x') {
      minesCounter++;
    }
  }

  if (y > 0) {
    if (board[id - cols].value === 'x') {
      minesCounter++;
    }
  }

  if (y < rows - 1) {
    if (board[id + cols].value === 'x') {
      minesCounter++;
    }
  }

  // diagonals
  if (x > 0 && y > 0) {
    if (board[id - 1 - cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x > 0 && y < rows - 1) {
    if (board[id - 1 + cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x < cols - 1 && y > 0) {
    if (board[id + 1 - cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x < cols - 1 && y < rows - 1) {
    if (board[id + 1 + cols].value === 'x') {
      minesCounter++;
    }
  }

  return minesCounter || '';
}
