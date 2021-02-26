import React, { useEffect, useState } from 'react';
import Cell from '../Cell/Cell';
import SIZES from '../../constants/SIZES';
import MINES from '../../constants/MINES';
import createEmptyField from './utils/createEmptyField';
import fillField from './utils/fillField';
import revealEmptyCells from '../Cell/utils/revealEmptyCells';
import { revealWholeField, playGameLost } from '../../utils/gameLost';
import gameWon from '../../utils/gameWon';
import useWindowWidth from '../../utils/useWindowWidth';
let isWin = false;
let isFirstClick = true;

export default function Field() {
  const [grid, setGrid] = useState([]);
  const [revealedCells, setRevealedCells] = useState(0);
  const windowWidth = useWindowWidth();

  SIZES.cols = 9;
  SIZES.rows = 9;
  MINES.quantity = 9;

  useEffect(() => {
    function refreshGrid() {
      setGrid(createEmptyField());
    }

    refreshGrid();
  }, []);

  useEffect(() => {
    if (!isWin && checkWin(revealedCells)) {
      isWin = true;
      setGrid(revealWholeField([...grid]));
      gameWon();
    }

    SIZES.unitByWindowWidth = (windowWidth - (2 * 20)) / SIZES.cols;
  });

  const revealCell = (event, index) => {
    event.preventDefault();

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

  const updateFlag = (event, index) => {
    event.preventDefault();

    if (!grid[index].isRevealed) {
      const newGrid = [...grid];
      newGrid[index].isFlagged = !newGrid[index].isFlagged;
      setGrid(newGrid);
    }
  }

  return (
    <div
      className='field'
      style={{
        width: `${SIZES.cols * SIZES.unit}px`,
        height: `${SIZES.rows * SIZES.unit}px`,
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
