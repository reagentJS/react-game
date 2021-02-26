import SIZES from '../../../constants/SIZES';
import MINES from '../../../constants/MINES';

export default function fillField(grid, indexFirstClicked) {
  grid = setupMines(grid, indexFirstClicked);
  grid.forEach((cell) => {
    if (cell.value !== 'x') {
      cell.value = calcNeigMines(grid, cell.id, cell.x, cell.y);
    }
  });

  return grid;
}

function setupMines(grid, indexFirstClicked) {
  let minesCounter = 0;

  while (minesCounter < MINES.quantity) {
    const randomIndex = Math.floor(Math.random() * SIZES.fieldArea);

    if (!grid[randomIndex].value && randomIndex !== indexFirstClicked) {
      grid[randomIndex].value = 'x';
      minesCounter++;
    }
  }

  return grid;
}

function calcNeigMines(grid, id, x, y) {
  let minesCounter = 0;

  if (x > 0) {
    if (grid[id - 1].value === 'x') {
      minesCounter++;
    }
  }

  if (x < SIZES.cols - 1) {
    if (grid[id + 1].value === 'x') {
      minesCounter++;
    }
  }

  if (y > 0) {
    if (grid[id - SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (y < SIZES.rows - 1) {
    if (grid[id + SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  // diagonals
  if (x > 0 && y > 0) {
    if (grid[id - 1 - SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x > 0 && y < SIZES.rows - 1) {
    if (grid[id - 1 + SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x < SIZES.cols - 1 && y > 0) {
    if (grid[id + 1 - SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  if (x < SIZES.cols - 1 && y < SIZES.rows - 1) {
    if (grid[id + 1 + SIZES.cols].value === 'x') {
      minesCounter++;
    }
  }

  return minesCounter || '';
}
