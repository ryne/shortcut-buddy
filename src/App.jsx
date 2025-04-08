import { useState } from "react";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";

const App = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  const [shortcutList, setShortcutList] = useState([]);

  const submitShortcut = (shortcut) => {
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
