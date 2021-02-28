import React, { useState } from 'react';
import DIFFICULTIES from '../../constants/DIFFICULTIES';

export default function NewGamePopup({ isVisible, toggleVisibility, startNewGame }) {
  const buttonsArr = Object.keys(DIFFICULTIES).map((item) => (
    <button
      key={item}
      className='cell cell-default'
      onClick={() => startNewGame(item)}
    >
      {item[0].toUpperCase() + item.slice(1)}
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
