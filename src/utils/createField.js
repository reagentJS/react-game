export default function createField(rows, cols, mines) {
  let board = Array(rows * cols).fill(null).map((item, index) => ({
    value: 0,
    index: index,
    x: index % cols,
    y: Math.floor(index / rows),
    isRevealed: false,
    isFlagged: false,
  }));

  board = setupMines(rows, cols, board, mines);
  return board;
}

function setupMines(rows, cols, board, mines) {
  let minesCounter = 0;
  const localMines = checkminesQuantity(rows, cols, mines);

  while (minesCounter < localMines) {
    const randomIndex = Math.floor(Math.random() * rows * cols);

    if (board[randomIndex].value === 0) {
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
