import { useState, useEffect } from "react";
import Header from "./Header";
import Configuration from "./Configuration";
import Keyboard from "./Keyboard";
import Prompt from "./Prompt";

const InputContainer = ({ submitShortcut }) => {
  const defaultShortcut = [
    { priority: "modifier-1", key: "" },
    { priority: "modifier-2", key: "" },
    { priority: "modifier-3", key: "" },
    { priority: "modifier-4", key: "" },
    { priority: "key", key: "" },
  ];
  const [keyboardLayout, setKeyboardLayout] = useState(
    localStorage.getItem("keyboardLayout"),
  );
  const [keyboardShortcut, setKeyboardShortcut] = useState(defaultShortcut);
  const [prompt, setPrompt] = useState("");
  const [lightMode, setLightMode] = useState(localStorage.getItem("theme"));
  const [pauseInput, setPauseInput] = useState(false);

  useEffect(() => {
    setPrompt("");
    setKeyboardShortcut(defaultShortcut);
    keyboardLayout
      ? localStorage.setItem("keyboardLayout", keyboardLayout)
      : setKeyboardLayout("Mac");
  }, [keyboardLayout]);

  useEffect(() => {
    lightMode === "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [lightMode]);

  const setLight = (m) => {
    setLightMode(m);
    localStorage.setItem("theme", m);
  };

  const addShortcut = (priority, key) => {
    if (pauseInput === false) {
      const newShortcut = [...keyboardShortcut];
      const shortcutIndex = newShortcut.findIndex(
        (item) => item.priority === priority,
      );
      if (newShortcut[shortcutIndex].key === key) {
        newShortcut[shortcutIndex].key = "";
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
          .join("-"),
      );
    }
  };

  const submitPrompt = () => {
    setPauseInput(true);
    if (prompt !== "") {
      fetch(
        `/api/getResponse?prompt=${encodeURIComponent(prompt)}&keyboardLayout=${encodeURIComponent(keyboardLayout)}`,
      )
        .then((res) => res.json())
        .then((data) => {
          submitShortcut({
            prompt: data.prompt,
            id: data.id,
            response: data.response,
          });
          resetPrompt();
          setPauseInput(false);
        })
        .catch((err) => {
          console.error("API error:", err);
          resetPrompt();
          setPauseInput(false);
          alert("Something went wrong. Please try again.");
        });
    }
  };

  const resetPrompt = () => {
    setPrompt("");
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
        lightMode={lightMode}
        setLight={(m) => setLight(m)}
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
        pauseInput={pauseInput}
      />
    </section>
  );
};

export default InputContainer;
