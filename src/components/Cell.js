import React from 'react';
import SIZES from '../constants/SIZES';

export default function Cell({ cellObj, revealCell, updateFlag }) {
  return (
    <button
      className={cellObj.isRevealed ? 'cell-reveal' : 'cell-default'}
      style={{
        width: `${SIZES.cellSize}px`,
        height: `${SIZES.cellSize}px`,
        margin: `${SIZES.margin}px`,
      }}
      onClick={() => revealCell(cellObj.index)}
      onContextMenu={(event) => updateFlag(event, cellObj.index)}
    >
      {cellObj.isRevealed ? cellObj.value : ''}
    </button>
  );
}
