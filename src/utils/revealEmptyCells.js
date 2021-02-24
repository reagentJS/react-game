import SIZES from '../constants/SIZES';

export default function revealEmptyCells(grid, id) {
  const flipped = [];
  flipped.push(grid[id]);

  while (flipped.length) {
    const checkingCell = flipped.pop();
    const { id, x, y } = checkingCell;
    checkingCell.isRevealed = true;

    if (checkingCell.value) {
      break;
    }

    if (x > 0) {
      if (!grid[id - 1].isRevealed) {
        grid[id - 1].value
          ? flipped.unshift(grid[id - 1])
          : flipped.push(grid[id - 1]);

        grid[id - 1].isRevealed = true;
      }
    }

    if (x < SIZES.cols - 1) {
      if (!grid[id + 1].isRevealed) {
        grid[id + 1].value
          ? flipped.unshift(grid[id + 1])
          : flipped.push(grid[id + 1]);

        grid[id + 1].isRevealed = true;
      }
    }

    if (y > 0) {
      if (!grid[id - SIZES.cols].isRevealed) {
        grid[id - SIZES.cols].value
          ? flipped.unshift(grid[id - SIZES.cols])
          : flipped.push(grid[id - SIZES.cols]);

        grid[id - SIZES.cols].isRevealed = true;
      }
    }

    if (y < SIZES.rows - 1) {
      if (!grid[id + SIZES.cols].isRevealed) {
        grid[id + SIZES.cols].value
          ? flipped.unshift(grid[id + SIZES.cols])
          : flipped.push(grid[id + SIZES.cols]);

        grid[id + SIZES.cols].isRevealed = true;
      }
    }

    // diagonals
    if (x > 0 && y > 0) {
      if (!grid[id - 1 - SIZES.cols].isRevealed) {
        grid[id - 1 - SIZES.cols].value
          ? flipped.unshift(grid[id - 1 - SIZES.cols])
          : flipped.push(grid[id - 1 - SIZES.cols]);

        grid[id - 1 - SIZES.cols].isRevealed = true;
      }
    }

    if (x > 0 && y < SIZES.rows - 1) {
      if (!grid[id - 1 + SIZES.cols].isRevealed) {
        grid[id - 1 + SIZES.cols].value
          ? flipped.unshift(grid[id - 1 + SIZES.cols])
          : flipped.push(grid[id - 1 + SIZES.cols]);

        grid[id - 1 + SIZES.cols].isRevealed = true;
      }
    }

    if (x < SIZES.cols - 1 && y > 0) {
      if (!grid[id + 1 - SIZES.cols].isRevealed) {
        grid[id + 1 - SIZES.cols].value
          ? flipped.unshift(grid[id + 1 - SIZES.cols])
          : flipped.push(grid[id + 1 - SIZES.cols]);

        grid[id + 1 - SIZES.cols].isRevealed = true;
      }
    }

    if (x < SIZES.cols - 1 && y < SIZES.rows - 1) {
      if (!grid[id + 1 + SIZES.cols].isRevealed) {
        grid[id + 1 + SIZES.cols].value
          ? flipped.unshift(grid[id + 1 + SIZES.cols])
          : flipped.push(grid[id + 1 + SIZES.cols]);

        grid[id + 1 + SIZES.cols].isRevealed = true;
      }
    }
  }

  return grid;
}
