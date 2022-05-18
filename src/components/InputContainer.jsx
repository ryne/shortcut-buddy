import { useState, useEffect } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import Configuration from './Configuration';

const InputContainer = () => {
  const [keyboardLayout, setKeyboardLayout] = useState(
    localStorage.getItem('keyboardLayout')
  );
  const [keyboardShortcut, setKeyboardShortcut] = useState([]);

  useEffect(() => {
    setKeyboardShortcut([
      { priority: 'modifier-1', key: '' },
      { priority: 'modifier-2', key: '' },
      { priority: 'modifier-3', key: '' },
      { priority: 'modifier-4', key: '' },
      { priority: 'key', key: '' },
    ]);
    keyboardLayout
      ? localStorage.setItem('keyboardLayout', keyboardLayout)
      : setKeyboardLayout('mac');
  }, [keyboardLayout]);

  useEffect(() => {
    console.log(keyboardShortcut);
  }, [keyboardShortcut]);

  const addShortcut = (priority, key) => {
    console.log(key);
    console.log(priority);
    const newShortcut = [...keyboardShortcut];
    const shortcutIndex = newShortcut.findIndex(
      (item) => item.priority === priority
    );
    if (newShortcut[shortcutIndex].key === key) {
      newShortcut[shortcutIndex].key = '';
      setKeyboardShortcut(newShortcut);
    } else {
      newShortcut[shortcutIndex].key = key;
      setKeyboardShortcut(newShortcut);
    }
  };

  return (
    <section
      id="InputContainer"
      className="flex flex-col justify-center items-center w-full h-full bg-slate-100 dark:bg-slate-900"
    >
      <Header />
      <Configuration
        keyboardLayout={keyboardLayout}
        setOS={(os) => setKeyboardLayout(os)}
      />
      <Keyboard
        keyboardLayout={keyboardLayout}
        addShortcut={(priority, key) => addShortcut(priority, key)}
      />
    </section>
  );
};

export default InputContainer;
