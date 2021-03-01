import React from 'react';
import SIZES from '../../constants/SIZES';
import NUM_COLORS from '../../constants/NUM_COLORS';

export default function Cell({ cellObj, revealCell, updateFlag, revealAround }) {
  const className = defineClassNameByProperties(cellObj);

  let isLeftDown = false;
  let isRightDown = false;

  const handleClick = (event, id) => {
    if (event.type === 'mousedown') {
      if (event.which === 1) {
        isLeftDown = true;
      }
      else if (event.which === 3) {
        isRightDown = true;
      }

      if (isLeftDown && isRightDown) {
        revealAround(id);
      }
    }
    else if (event.type === 'mouseup') {
      if (event.which === 1) {
        isLeftDown = false;
        if (!isRightDown) {
          revealCell(id);
        }
      }
      else if (event.which === 3) {
        isRightDown = false;
        if (!isLeftDown) {
          updateFlag(id);
        }
      }
    }
  }

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
      onMouseDown={(event) => handleClick(event.nativeEvent, cellObj.id)}
      onMouseUp={(event) => handleClick(event.nativeEvent, cellObj.id)}
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
