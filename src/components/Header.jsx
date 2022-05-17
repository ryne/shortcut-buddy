const Header = () => {
  return (
    <header id="Header" className="block h-1/6 max-h-[128px] min-h-[96px]">
      <h1 className="text-center text-3xl font-black text-blue-500 dark:text-blue-400">
        Shortcut Buddy
      </h1>
      <p className="text-center text-slate-800 dark:text-slate-200">
        An OpenAI-powered tool for learning keyboard shortcuts
      </p>
    </header>
  );
};

export default Header;
