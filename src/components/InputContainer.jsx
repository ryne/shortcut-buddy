import { useState, useEffect } from 'react';
import Header from './Header';
import Configuration from './Configuration';
import Keyboard from './Keyboard';
import Prompt from './Prompt';

const InputContainer = ({ submitShortcut }) => {
  const defaultShortcut = [
    { priority: 'modifier-1', key: '' },
    { priority: 'modifier-2', key: '' },
    { priority: 'modifier-3', key: '' },
    { priority: 'modifier-4', key: '' },
    { priority: 'key', key: '' },
  ];
  const [keyboardLayout, setKeyboardLayout] = useState(
    localStorage.getItem('keyboardLayout')
  );
  const [keyboardShortcut, setKeyboardShortcut] = useState(defaultShortcut);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    setPrompt('');
    setKeyboardShortcut(defaultShortcut);
    keyboardLayout
      ? localStorage.setItem('keyboardLayout', keyboardLayout)
      : setKeyboardLayout('Mac');
  }, [keyboardLayout]);

  const addShortcut = (priority, key) => {
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
    setPrompt(
      newShortcut
        .map((a) => a.key)
        .filter((a) => {
          return a;
        })
        .join('-')
    );
  };

  const submitPrompt = () => {
    if (prompt !== '') {
      console.log(
        `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`
      );
      const data = {
        prompt: `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify(data),
      })
        .catch((error) => {
          alert(error);
        })
        .then((response) => response.json())
        .then((data) => {
          submitShortcut({
            prompt: `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`,
            id: data.created,
            response: data.choices[0].text.replace(/\r?\n|\r/g, ''),
          });
        });
    }
    setPrompt('');
    setKeyboardShortcut(defaultShortcut);
  };

  const resetPrompt = () => {
    setPrompt('');
    setKeyboardShortcut(defaultShortcut);
  };

  return (
    <section
      id="InputContainer"
      className="flex flex-col justify-center items-center w-full h-full 2xl:h-[calc(100vh-160px)] bg-slate-100 dark:bg-slate-900"
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
      <Prompt
        keyboardLayout={keyboardLayout}
        prompt={prompt}
        submitPrompt={submitPrompt}
        resetPrompt={resetPrompt}
      />
    </section>
  );
};

export default InputContainer;
