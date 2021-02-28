export function revealWholeField(grid) {
  return grid.map((cell) => ({ ...cell, isRevealed: true, isFlagged: false }));
}

export function playGameLost() {
  alert('you lose!');
}
