import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import SIZES from '../constants/SIZES';
import createField from '../utils/createField';

export default function Field() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function refreshGrid() {
      const field = createField(9, 9, 16);
      setGrid(field);
    }

    refreshGrid();
  }, []);

  const revealCell = (index) => {
    const newGrid = [...grid];

    if (newGrid[index].value === 'x') {
      alert('mine found!');
    }
    else {
      newGrid[index].isRevealed = true;
      setGrid(newGrid);
    }
  }

  const updateFlag = (event, index) => {
    event.preventDefault();

    const newGrid = [...grid];
    newGrid[index].isFlagged = true;
    setGrid(newGrid);
  }

  return (
    <div
      className='field'
      style={{
        width: `${SIZES.fieldWidthInPixels}px`,
      }}
    >

      {grid.map((cellObj) => {
        return (
          <Cell
            key={cellObj.id}
            cellObj={cellObj}
            revealCell={revealCell}
            updateFlag={updateFlag}
          />
        );
      })}

    </div>
  );
}
