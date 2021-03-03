import React, { useState } from 'react';
import DIFFICULTIES from '../../constants/DIFFICULTIES';

export default function NewGamePopup({ isVisible, toggleVisibility, startNewGame }) {
  const buttonsArr = Object.keys(DIFFICULTIES).map((diff) => (
    <button
      key={diff}
      className='cell cell-default'
      onClick={() => startNewGame(diff)}
    >
      {diff[0].toUpperCase() + diff.slice(1)}
    </button>
  ));

  return (
    <div className={isVisible ? 'newGame-popup' : 'newGame-popup invis'}>
      <span>New game</span>

      {buttonsArr}

      <button
        className='cell cell-default'
        onClick={toggleVisibility}
      >
        Cancel
      </button>
    </div>
  );
}
