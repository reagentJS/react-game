import { useState } from 'react';
import './styles/styles.scss';
import NewGamePopup from './components/NewGamePopup/NewGamePopup';
import Game from './components/Game/Game';
import DIFFICULTIES from './constants/DIFFICULTIES';
import OTHER_CONSTANTS from './constants/OTHER_CONSTANTS';
import rssLogo from './assets/images/rss-logo.svg';

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
          toggleVisibility={toggleVisibility}
        />
      }
      <footer>
        <div>
          <a href='https://github.com/reagentJS'>
            reagentjs
        </a>
          <a
            href='https://rs.school/js/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='iconRss'
              src={rssLogo}
              alt='RSSchool-logo'
              width='60'
            />
          </a>
          <span>
            02.2021
        </span>
        </div>
      </footer>
    </>
  );
}

export default App;
