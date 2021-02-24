export function revealWholeField(grid) {
  return grid.map((cell) => ({ ...cell, isRevealed: true }));
}

export function playGameLost() {
  alert('you lose!');
}
