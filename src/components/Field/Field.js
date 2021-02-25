import React, { useEffect, useState } from 'react';
import Cell from '../Cell/Cell';
import SIZES from '../../constants/SIZES';
import MINES from '../../constants/MINES';
import createEmptyField from './createEmptyField';
import fillField from './fillField';
import revealEmptyCells from '../Cell/revealEmptyCells';
import { revealWholeField, playGameLost } from '../../utils/gameLost';
import gameWon from '../../utils/gameWon';
let isWin = false;
let isFirstClick = true;

export default function Field() {
  const [grid, setGrid] = useState([]);
  const [revealedCells, setRevealedCells] = useState(0);

  SIZES.cols = 9;
  SIZES.rows = 9;
  MINES.quantity = 9;

  useEffect(() => {
    function refreshGrid() {
      setGrid(createEmptyField());
    }

    refreshGrid();
  }, []);

  const revealCell = (index) => {
    if (isFirstClick) {
      isFirstClick = false;
      setGrid(fillField([...grid], index));
    }

    if (!grid[index].isRevealed && !grid[index].isFlagged) {
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

  const flagCell = (index) => {
    
  }

  useEffect(() => {
    if (!isWin && checkWin(revealedCells)) {
      isWin = true;
      setGrid(revealWholeField([...grid]));
      gameWon();
    }
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
  return revealedCells === MINES.cellsWithoutMines;
}
