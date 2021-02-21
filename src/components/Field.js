import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import SIZES from '../constants/SIZES';
import createField from '../utils/createField';
import revealEmptyCells from '../utils/revealEmptyCells';

export default function Field() {
  const [grid, setGrid] = useState([]);
  SIZES.cols = 9;
  SIZES.rows = 9;
  const minesQuantity = 9;

  useEffect(() => {
    function refreshGrid() {
      const field = createField(minesQuantity);
      setGrid(field);
    }

    refreshGrid();
  }, []);

  const revealCell = (index) => {
    if (!grid[index].isRevealed) {
      if (grid[index].value === 'x') {
        alert('mine found!');
      }
      else {
        setGrid(revealEmptyCells([...grid], index));
      }
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
