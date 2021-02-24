import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import SIZES from '../constants/SIZES';
import MINES from '../constants/MINES';
import createField from '../utils/createField';
import revealEmptyCells from '../utils/revealEmptyCells';
import { revealWholeField, playGameLost } from '../utils/gameLost';
import gameWon from '../utils/gameWon';

export default function Field() {
  const [grid, setGrid] = useState([]);
  const [revealedCells, setRevealedCells] = useState(0);

  SIZES.cols = 9;
  SIZES.rows = 9;
  MINES.quantity = 9;

  useEffect(() => {
    function refreshGrid() {
      setGrid(createField());
    }

    refreshGrid();
  }, []);

  const revealCell = (index) => {
    if (!grid[index].isRevealed) {
      if (grid[index].value === 'x') {
        setGrid(revealWholeField([...grid]));
        playGameLost();
      }
      else {
        const [newGrid, newRevealedCells] = revealEmptyCells([...grid], index);
        setGrid(newGrid);
        setRevealedCells(revealedCells + newRevealedCells); 
      }
    }
  }

  useEffect(() => {
    checkWin(revealedCells);
  });

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

function checkWin(revealedCells) {
  if (revealedCells === MINES.cellsWithoutMines) {
    gameWon();
  }
}
