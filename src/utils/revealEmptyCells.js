import SIZES from '../constants/SIZES';

export default function revealEmptyCells(grid, index) {
  grid[index].isRevealed = true;

  const flipped = [];
  flipped.push(grid[index]);

  while (flipped.length) {
    const checkingCell = flipped.pop();

    if (checkingCell.value) {
      break;
    }

    if (index % SIZES.cols > 0) {

    }
  }

  return grid;
}
