import SIZES from '../../../constants/SIZES';

export default function createEmptyField() {
  const grid = Array(SIZES.fieldArea).fill(null).map((item, index) => ({
    id: index,
    x: index % SIZES.cols,
    y: Math.floor(index / SIZES.cols),
    isRevealed: false,
    isFlagged: false,
  }));

  return grid;
}
