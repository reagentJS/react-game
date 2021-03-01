import React, { useEffect, useState } from 'react';
import Cell from '../Cell/Cell';
import SIZES from '../../constants/SIZES';
import MINES from '../../constants/MINES';
import createEmptyField from './utils/createEmptyField';
import fillField from './utils/fillField';
import revealEmptyCells from '../Cell/utils/revealEmptyCells';
import revealAroundCells from '../Cell/utils/revealAroundCells';
import { revealWholeField, playGameLost } from '../../utils/gameLost';
import gameWon from '../../utils/gameWon';
import useWindowWidth from '../../utils/useWindowWidth';
let isWin = false;
let isFirstClick = true;
let revealedCellsCounter = 0;

export default function Field({ fieldParameters, isNewGamePopupVisible }) {
  const [grid, setGrid] = useState([]);
  const [revealedCells, setRevealedCells] = useState(0);
  const windowWidth = useWindowWidth();

  refreshFieldParameters(fieldParameters);

  useEffect(() => {
    function refreshGrid() {
      setGrid(createEmptyField());
    }

    refreshGrid();
  }, []);

  useEffect(() => {
    if (!isWin && revealedCells >= MINES.cellsWithoutMines) {
      isWin = true;
      setGrid(revealWholeField([...grid]));
      gameWon();
    }

    SIZES.unitByWindowWidth = (windowWidth - (2 * 20)) / SIZES.cols;
  });

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
        revealedCellsCounter += newRevealedCells;
        setRevealedCells(revealedCellsCounter);
      }
    }
  }

  const updateFlag = (index) => {
    if (!grid[index].isRevealed) {
      const newGrid = [...grid];
      newGrid[index].isFlagged = !newGrid[index].isFlagged;
      setGrid(newGrid);
    }
  }

  const revealAround = (id) => {
    if (grid[id].isRevealed) {
      revealAroundCells(grid, id, revealCell);
    }
  }

  return (
    <div
      className='field'
      style={{
        width: `${SIZES.cols * SIZES.unit}px`,
        height: `${SIZES.rows * SIZES.unit}px`,
      }}
      onContextMenu={(e) => e.preventDefault()}
    >

      {grid.map((cellObj) => {
        return (
          <Cell
            key={cellObj.id}
            cellObj={cellObj}
            revealCell={revealCell}
            updateFlag={updateFlag}
            revealAround={revealAround}
          />
        );
      })}

    </div>
  );
}

function refreshFieldParameters({ width, height, minesQuantity }) {
  SIZES.cols = width;
  SIZES.rows = height;
  MINES.quantity = minesQuantity;
}
