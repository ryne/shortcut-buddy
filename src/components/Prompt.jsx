import { VscDebugRestart } from 'react-icons/vsc';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const Prompt = ({
  keyboardLayout,
  prompt,
  submitPrompt,
  resetPrompt,
  pauseInput,
}) => {
  return (
    <div
      id="Prompt"
      className="flex flex-col justify-center items-center align-center py-6 md:py-8"
    >
      <p className="text-center p-4 text-base md:text-lg lg:text-2xl font-light text-slate-800 dark:text-slate-100">
        <span className={pauseInput ? 'hidden' : ''}>
          {prompt
            ? `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`
            : `Please select a modifier or character to begin.`}
        </span>
        <span
          className={
            pauseInput
              ? 'flex flex-row items-center text-blue-500 dark:text-blue-400'
              : 'hidden'
          }
        >
          <AiOutlineLoading3Quarters className="animate-spin mr-2" />{' '}
          Processing...
        </span>
      </p>
      <div className="flex flex-row items-center justify-center items-center mt-2 sm:mt-4 md:mt-6">
        <button
          onClick={() => submitPrompt()}
          className={`${
            prompt ? '' : 'opacity-0 pointer-events-none'
          }  px-4 py-2 pt-1.5 rounded-lg text-xs md:text-sm lg:text-base text-slate-100 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 active:from-blue-600 active:to-blue-800`}
        >
          Submit Prompt
        </button>
        <button
          onClick={() => resetPrompt()}
          className={`${
            prompt ? '' : 'opacity-0 pointer-events-none'
          } ml-2 px-1.5 py-1.5 rounded-lg text-sm md:text-base lg:text-xl text-slate-100 bg-gradient-to-b from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 active:from-red-600 active:to-red-800`}
        >
          <VscDebugRestart />
        </button>
      </div>
    </div>
  );
};

export default Prompt;
