import Header from './Header';
import Keyboard from './Keyboard';

const InputContainer = () => {
  return (
    <div
      id="InputContainer"
      className="flex flex-col justify-center items-center content-center w-full h-3/4 bg-slate-100 dark:bg-slate-900"
    >
      <Header />
      <Keyboard />
    </div>
  );
};

export default InputContainer;
