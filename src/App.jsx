import { useState } from 'react';
import InputContainer from './components/InputContainer';
import OutputContainer from './components/OutputContainer';

const App = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const [shortcutList, setShortcutList] = useState([]);
  const submitShortcut = (shortcut) => {
    console.log(shortcut);
    setShortcutList([...shortcutList, shortcut]);
  };

  return (
    <>
      <InputContainer submitShortcut={(shortcut) => submitShortcut(shortcut)} />
      <OutputContainer shortcutList={shortcutList} />
    </>
  );
};

export default App;
