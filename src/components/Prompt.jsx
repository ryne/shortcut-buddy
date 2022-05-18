const Prompt = ({ keyboardLayout, prompt, submitPrompt }) => {
  return (
    <div
      id="Prompt"
      className="flex flex-col justify-center items-center align-center py-6 md:py-8"
    >
      <p className="text-center text-sm md:text-lg lg:text-2xl font-light text-slate-800 dark:text-slate-100">
        {prompt
          ? `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`
          : `Please select a modifier or character to begin.`}
      </p>
      <button
        onClick={() => submitPrompt()}
        className={`${
          prompt ? '' : 'opacity-0 pointer-events-none'
        } mt-2 sm:mt-4 md:mt-6 px-4 py-2 rounded-lg text-xs md:text-sm lg:text-base text-slate-100 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700`}
      >
        Submit Prompt
      </button>
    </div>
  );
};

export default Prompt;
