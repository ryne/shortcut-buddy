import Header from './Header';
import Keyboard from './Keyboard';
import Configuration from './Configuration';

const InputContainer = () => {
  return (
    <section
      id="InputContainer"
      className="flex flex-col justify-center items-center w-full h-3/4 bg-slate-100 dark:bg-slate-900"
    >
      <Header />
      <Configuration />
      <Keyboard />
    </section>
  );
};

export default InputContainer;
