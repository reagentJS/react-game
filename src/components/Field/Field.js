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
import useWindowSize from '../../utils/useWindowSize';
import OTHER_CONSTANTS from '../../constants/OTHER_CONSTANTS';

export default function Field({ fieldParameters, flaggedCount, setFlaggedCount, setStopTimer, time }) {
  const [grid, setGrid] = useState([]);
  const [revealedCells, setRevealedCells] = useState(0);
  const windowSize = useWindowSize();
  const [isWin, setIsWin] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);

  useEffect(() => {
    refreshFieldParameters(fieldParameters);
  }, [fieldParameters]);

  useEffect(() => {
    function refreshGrid() {
      setGrid(createEmptyField());
    }

    refreshGrid();
  }, []);

  useEffect(() => {
    if (!isWin && revealedCells >= MINES.cellsWithoutMines) {
      setIsWin(true);
      setGrid(revealWholeField([...grid]));
      setFlaggedCount(0);
      gameWon(time);
      setStopTimer(true);
    }
  });

  useEffect(() => {
    const { windowWidth, windowHeight } = windowSize;
    const paddingsHeight = 2 * windowHeight * 10 / 100;
    SIZES.unitByWindowWidth = (windowWidth - (SIZES.paddings)) / SIZES.cols;
    SIZES.unitByWindowHeight = (windowHeight - (SIZES.infoHeight + paddingsHeight + SIZES.paddings)) / SIZES.rows;
  }, [windowSize]);

  const revealCell = (index) => {
    if (isFirstClick) {
      setIsFirstClick(false);
      setGrid(fillField([...grid], index));
    }

    if (!grid[index].isRevealed && !grid[index].isFlagged) {
      if (grid[index].value === 'x') {
        setGrid(revealWholeField([...grid]));
        playGameLost(time);
        setStopTimer(true);
      }
      else {
        const [newGrid, newRevealedCells] = revealEmptyCells([...grid], index);
        setGrid(newGrid);
        OTHER_CONSTANTS.revealedCellsCounter += newRevealedCells;
        setRevealedCells(OTHER_CONSTANTS.revealedCellsCounter);
      }
    }
  }

  const updateFlag = (index) => {
    if (!grid[index].isRevealed) {
      const newGrid = [...grid];

      newGrid[index].isFlagged
        ? setFlaggedCount(flaggedCount + 1)
        : setFlaggedCount(flaggedCount - 1);

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
  OTHER_CONSTANTS.revealedCellsCounter = 0;
}
