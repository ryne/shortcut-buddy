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

  return (
    <>
      <InputContainer />
      <OutputContainer />
    </>
  );
};

export default App;
