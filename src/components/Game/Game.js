import React from 'react';
import Info from '../Info/Info';
import Field from '../Field/Field';

export default function Game({ fieldParameters, isNewGamePopupVisible }) {
  return (
    <div className='game'>
      <Info />
      <Field
        fieldParameters={fieldParameters}
        isNewGamePopupVisible={isNewGamePopupVisible}
      />
    </div>
  );
}
