import SIZES from '../../../constants/SIZES';

export default function revealAroundCells(grid, id, revealCell) {
  if (areEqualValueAndFlags(grid, id)) {
    revealAround(grid, id, revealCell);
  }
}

function areEqualValueAndFlags(grid, id) {
  const { x, y } = grid[id];
  let flaggedAround = 0;

  if (x > 0) {
    if (grid[id - 1].isFlagged) {
      flaggedAround++;
    }
  }

  if (x < SIZES.cols - 1) {
    if (grid[id + 1].isFlagged) {
      flaggedAround++;
    }
  }

  if (y > 0) {
    if (grid[id - SIZES.cols].isFlagged) {
      flaggedAround++;
    }
  }

  if (y < SIZES.rows - 1) {
    if (grid[id + SIZES.cols].isFlagged) {
      flaggedAround++;
    }
  }

  // diagonals
  if (x > 0 && y > 0) {
    if (grid[id - 1 - SIZES.cols].isFlagged) {
      flaggedAround++;
    }
  }

  if (x > 0 && y < SIZES.rows - 1) {
    if (grid[id - 1 + SIZES.cols].isFlagged) {
      flaggedAround++;
    }
  }

  if (x < SIZES.cols - 1 && y > 0) {
    if (grid[id + 1 - SIZES.cols].isFlagged) {
      flaggedAround++;
    }
  }

  if (x < SIZES.cols - 1 && y < SIZES.rows - 1) {
    if (grid[id + 1 + SIZES.cols].isFlagged) {
      flaggedAround++;
    }
  }

  return grid[id].value === flaggedAround;
}

function revealAround(grid, id, revealCell) {
  const { x, y } = grid[id];

  if (x > 0) {
    if (!grid[id - 1].isFlagged) {
      revealCell(id - 1);
      if (grid[id - 1].value === 'x') {
        return;
      }
    }
  }

  if (x < SIZES.cols - 1) {
    if (!grid[id + 1].isFlagged) {
      revealCell(id + 1);
      if (grid[id + 1].value === 'x') {
        return;
      }
    }
  }

  if (y > 0) {
    if (!grid[id - SIZES.cols].isFlagged) {
      revealCell(id - SIZES.cols);
      if (grid[id - SIZES.cols].value === 'x') {
        return;
      }
    }
  }

  if (y < SIZES.rows - 1) {
    if (!grid[id + SIZES.cols].isFlagged) {
      revealCell(id + SIZES.cols);
      if (grid[id + SIZES.cols].value === 'x') {
        return;
      }
    }
  }

  // diagonals
  if (x > 0 && y > 0) {
    if (!grid[id - 1 - SIZES.cols].isFlagged) {
      revealCell(id - 1 - SIZES.cols);
      if (grid[id - 1 - SIZES.cols].value === 'x') {
        return;
      }
    }
  }

  if (x > 0 && y < SIZES.rows - 1) {
    if (!grid[id - 1 + SIZES.cols].isFlagged) {
      revealCell(id - 1 + SIZES.cols);
      if (grid[id - 1 + SIZES.cols].value === 'x') {
        return;
      }
    }
  }

  if (x < SIZES.cols - 1 && y > 0) {
    if (!grid[id + 1 - SIZES.cols].isFlagged) {
      revealCell(id + 1 - SIZES.cols);
      if (grid[id + 1 - SIZES.cols].value === 'x') {
        return;
      }
    }
  }

  if (x < SIZES.cols - 1 && y < SIZES.rows - 1) {
    if (!grid[id + 1 + SIZES.cols].isFlagged) {
      revealCell(id + 1 + SIZES.cols);
      if (grid[id + 1 + SIZES.cols].value === 'x') {
        return;
      }
    }
  }
}
