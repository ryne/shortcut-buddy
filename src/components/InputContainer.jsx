import { useState, useEffect } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import Configuration from './Configuration';

const InputContainer = () => {
  const [keyboardLayout, setKeyboardLayout] = useState(
    localStorage.getItem('keyboardLayout')
  );

  useEffect(() => {
    keyboardLayout
      ? localStorage.setItem('keyboardLayout', keyboardLayout)
      : setKeyboardLayout('mac');
  }, [keyboardLayout]);

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
      <Keyboard keyboardLayout={keyboardLayout} />
    </section>
  );
};

export default InputContainer;
