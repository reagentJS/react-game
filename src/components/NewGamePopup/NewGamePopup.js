import React, { useState } from 'react';

export default function NewGamePopup({ isVisible, setVisibility }) {
  const toggleVisibility = () => {
    setVisibility(!isVisible);
  }

  return (
    <div className={isVisible ? 'newGame-popup' : 'newGame-popup invis'}>
      <span>New Game</span>

      <div className='buttons'>
        <button
          className='cell cell-default'
          onClick={toggleVisibility}
        >
          Start
        </button>
        <button
          className='cell cell-default'
          onClick={toggleVisibility}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
