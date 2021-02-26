import { useEffect, useState } from 'react';
import './styles/styles.scss';
import NewGamePopup from './components/NewGamePopup/NewGamePopup';
import Field from './components/Field/Field';

function App() {
  const [isNewGamePopupVisible, setNewGamePopupVisibility] = useState(true);

  return (
    <>
      <NewGamePopup
        isVisible={isNewGamePopupVisible}
        setVisibility={setNewGamePopupVisibility}
      />
      <Field
        isNewGamePopupVisible={isNewGamePopupVisible}
      />
    </>
  );
}

export default App;
