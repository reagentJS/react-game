import { useEffect, useState } from 'react';
import './styles/styles.scss';
import NewGamePopup from './components/NewGamePopup/NewGamePopup';
import Game from './components/Game/Game';
import Field from './components/Field/Field';
import DIFFICULTIES from './constants/DIFFICULTIES';
import OTHER_CONSTANTS from './constants/OTHER_CONSTANTS';

function App() {
  const [isNewGamePopupVisibleAfterAnimation, setNewGamePopupVisibilityAfterAnimation] = useState(true);
  const [isNewGamePopupVisible, setNewGamePopupVisibility] = useState(true);
  const [fieldParameters, setFieldParameters] = useState(DIFFICULTIES.easy);

  const toggleVisibility = () => {
    setNewGamePopupVisibility(!isNewGamePopupVisible);

    setTimeout(() => {
      setNewGamePopupVisibilityAfterAnimation(!isNewGamePopupVisibleAfterAnimation);
    }, OTHER_CONSTANTS.animationTime);
  }

  const startNewGame = (diff) => {
    toggleVisibility();
    setFieldParameters({ ...DIFFICULTIES[diff] });
  }

  return (
    <>
      {isNewGamePopupVisibleAfterAnimation
        ? <NewGamePopup
          isVisible={isNewGamePopupVisible}
          toggleVisibility={toggleVisibility}
          startNewGame={startNewGame}
        />
        : <Game
          fieldParameters={fieldParameters}
          isNewGamePopupVisible={isNewGamePopupVisibleAfterAnimation}
        />
      }
    </>
  );
}

export default App;
