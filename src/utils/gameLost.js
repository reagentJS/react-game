export function revealWholeField(grid) {
  return grid.map((cell) => ({ ...cell, isRevealed: true, isFlagged: false }));
}

export function playGameLost(time) {
  alert(`
    Oh no, you lose! :(
    Time: ${time}`
  );
}
