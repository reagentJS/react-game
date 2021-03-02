import React, { useState } from 'react';
import Info from '../Info/Info';
import Field from '../Field/Field';
import MINES from '../../constants/MINES';

export default function Game({ fieldParameters, isNewGamePopupVisible }) {
  const [flaggedCount, setFlaggedCount] = useState(fieldParameters.minesQuantity);
  const [isStopTimer, setStopTimer] = useState(false);

  return (
    <div className='game'>
      <Info
        flaggedCount={flaggedCount}
        isStopTimer={isStopTimer}
      />
      <Field
        fieldParameters={fieldParameters}
        flaggedCount={flaggedCount}
        setFlaggedCount={setFlaggedCount}
        setStopTimer={setStopTimer}
      />
    </div>
  );
}
