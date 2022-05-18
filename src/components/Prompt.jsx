const Prompt = ({ prompt, keyboardLayout }) => {
  return (
    <div id="Prompt" className="flex p-8">
      <p className="text-2xl font-light text-slate-800 dark:text-slate-100">
        {prompt
          ? `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`
          : `Please select a modifier or character to begin.`}
      </p>
    </div>
  );
};

export default Prompt;
