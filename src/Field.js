import React from 'react';
import Cell from './components/Cell';
import SIZES from './constants/SIZES';

export default function Field() {
  const fieldArr = Array(SIZES.fieldWidth * SIZES.fieldHeight).fill(null).map((item, index) => {
    return (
      <Cell
        key={index}
        isReveal={index % 2 === 0}
      />
    );
  });

  return (
    <div
      className='field'
      style={{
        width: `${SIZES.fieldWidthInPixels}px`,
      }}
    >
      {fieldArr}
    </div>
  );
}
