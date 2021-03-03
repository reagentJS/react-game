import React, { useState } from 'react';
import Info from '../Info/Info';
import Field from '../Field/Field';

export default function Game({ fieldParameters, toggleVisibility }) {
  const [flaggedCount, setFlaggedCount] = useState(fieldParameters.minesQuantity);
  const [isStopTimer, setStopTimer] = useState(false);
  const [time, setTime] = useState('00:00:00');

  return (
    <div className='game'>
      <Info
        flaggedCount={flaggedCount}
        isStopTimer={isStopTimer}
        toggleVisibility={toggleVisibility}
        time={time}
        setTime={setTime}
      />
      <Field
        fieldParameters={fieldParameters}
        flaggedCount={flaggedCount}
        setFlaggedCount={setFlaggedCount}
        setStopTimer={setStopTimer}
        time={time}
      />
    </div>
  );
}
