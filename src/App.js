import { useEffect, useState } from 'react';
import './styles/styles.scss';
import NewGameWindow from './components/NewGameWindow/NewGameWindow';
import Field from './components/Field/Field';

function App() {
  const [isNewGameWindowVisible, setNewGameWindowVisibility] = useState(true);

  return (
    <>
      <NewGameWindow
        isVisible={isNewGameWindowVisible}
        setVisibility={setNewGameWindowVisibility}
      />
      <Field
        isNewGameWindowVisible={isNewGameWindowVisible}
      />
    </>
  );
}

export default App;
