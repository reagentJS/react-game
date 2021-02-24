import SIZES from '../constants/SIZES';

export default function revealEmptyCells(grid, id) {
  grid[id].isRevealed = true;

  const flipped = [];
  flipped.push(grid[id]);

  while (flipped.length) {
    console.log(`flipped.length = ${flipped.length}`);

    const checkingCell = flipped.pop();
    const { x, y } = { checkingCell };

    if (checkingCell.value) {
      break;
    }

    if (x > 0) {
      if (!grid[id - 1].value && !grid[id - 1].isRevealed) {
        flipped.push(grid[id - 1]);
        grid[id - 1].isRevealed = true;
      }
    }

    if (x < SIZES.cols) {
      if (!grid[id + 1].value && !grid[id + 1].isRevealed) {
        flipped.push(grid[id + 1]);
        grid[id + 1].isRevealed = true;
      }
    }

    if (y > 0) {
      if (!grid[id - SIZES.cols].value && !grid[id - SIZES.cols].isRevealed) {
        flipped.push(grid[id - SIZES.cols]);
        grid[id - SIZES.cols].isRevealed = true;
      }
    }

    if (y < SIZES.rows) {
      if (!grid[id + SIZES.cols].value && !grid[id + SIZES.cols].isRevealed) {
        flipped.push(grid[id + SIZES.cols]);
        grid[id + SIZES.cols].isRevealed = true;
      }
    }

    // diagonals
    if (x > 0 && y > 0) {
      if (!grid[id - 1 - SIZES.cols].value && !grid[id - 1 - SIZES.cols].isRevealed) {
        flipped.push(grid[id - 1 - SIZES.cols]);
        grid[id - 1 - SIZES.cols].isRevealed = true;
      }
    }

    if (x > 0 && y < SIZES.rows - 1) {
      if (!grid[id - 1 + SIZES.cols].value && !grid[id - 1 + SIZES.cols].isRevealed) {
        flipped.push(grid[id - 1 + SIZES.cols]);
        grid[id - 1 + SIZES.cols].isRevealed = true;
      }
    }

    if (x < SIZES.cols - 1 && y > 0) {
      if (!grid[id + 1 - SIZES.cols].value && !grid[id + 1 - SIZES.cols].isRevealed) {
        flipped.push(grid[id - 1 + SIZES.cols]);
        grid[id - 1 + SIZES.cols].isRevealed = true;
      }
    }

    if (x < SIZES.cols - 1 && y < SIZES.rows - 1) {
      if (!grid[id + 1 + SIZES.cols].value && !grid[id + 1 + SIZES.cols].isRevealed) {
        flipped.push(grid[id + 1 + SIZES.cols]);
        grid[id + 1 + SIZES.cols].isRevealed = true;
      }
    }

    

    // ===================


    
    if (x > 0) {
      if (!grid[id - 1].isRevealed) {
        grid[id - 1].isRevealed = true;
      }
    }

    if (x < SIZES.cols) {
      if (!grid[id + 1].isRevealed) {
        grid[id + 1].isRevealed = true;
      }
    }

    if (y > 0) {
      if (!grid[id - SIZES.cols].isRevealed) {
        grid[id - SIZES.cols].isRevealed = true;
      }
    }

    if (y < SIZES.rows) {
      if (!grid[id + SIZES.cols].isRevealed) {
        grid[id + SIZES.cols].isRevealed = true;
      }
    }

    // diagonals
    if (x > 0 && y > 0) {
      if (!grid[id - 1 - SIZES.cols].isRevealed) {
        grid[id - 1 - SIZES.cols].isRevealed = true;
      }
    }

    if (x > 0 && y < SIZES.rows - 1) {
      if (!grid[id - 1 + SIZES.cols].isRevealed) {
        grid[id - 1 + SIZES.cols].isRevealed = true;
      }
    }

    if (x < SIZES.cols - 1 && y > 0) {
      if (!grid[id + 1 - SIZES.cols].isRevealed) {
        grid[id - 1 + SIZES.cols].isRevealed = true;
      }
    }

    if (y < SIZES.rows - 1) {
      if (!grid[id + 1 + SIZES.cols].isRevealed) {
        grid[id + 1 + SIZES.cols].isRevealed = true;
      }
    }

  }

  return grid;
}
