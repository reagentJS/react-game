import React, { useState } from 'react';

export default function NewGameWindow({ isVisible, setVisibility }) {
  return (
    <div className={isVisible ? 'newGame-window' : 'newGame-window invis'}>
      <span>NewGame</span>
      <button onClick={() => setVisibility(!isVisible)}>Ok</button>  
    </div>
  )
}
