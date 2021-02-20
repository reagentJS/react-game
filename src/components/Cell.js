import React from 'react';
import SIZES from '../constants/SIZES';

export default function Cell({ isReveal }) {
  return (
    <button
      className={isReveal ? 'cell-reveal' : 'cell-default'}
      style={{
        width: `${SIZES.cellSize}px`,
        height: `${SIZES.cellSize}px`,
        margin: `${SIZES.margin}px`,
      }}
    >
    </button>
  );
}
