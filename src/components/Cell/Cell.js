import React from 'react';
import SIZES from '../../constants/SIZES';
import NUM_COLORS from '../../constants/NUM_COLORS';

export default function Cell({ cellObj, revealCell, updateFlag }) {
  const className = defineClassNameByProperties(cellObj);

  return (
    <a
      href='#0'
      className={`cell ${className}`}
      style={{
        margin: `${SIZES.margin}px`,
        width: `${SIZES.cellSize}px`,
        height: `${SIZES.cellSize}px`,
        fontSize: `${0.5 * SIZES.unit}px`,
        color: NUM_COLORS[cellObj.value] || '#000',
      }}
      onClick={(event) => revealCell(event, cellObj.id)}
      onContextMenu={(event) => updateFlag(event, cellObj.id)}
    >
      {cellObj.isRevealed ? cellObj.value : ''}
    </a>
  );
}

function defineClassNameByProperties({ value, isRevealed, isFlagged }) {
  let className = 'cell-default';
  if (isFlagged) {
    className = 'cell-flagged';
  }
  else if (isRevealed) {
    className = 'cell-revealed';
  }
  if (value === 'x' && isRevealed) {
    className = 'cell-mine';
  }

  return className;
}
