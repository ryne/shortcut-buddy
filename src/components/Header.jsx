const Header = () => {
  return (
    <header
      id="Header"
      className="pt-4 block h-1/6 max-h-[128px] min-h-[112px]"
    >
      <h1 className="text-center text-2xl md:text-4xl font-black text-blue-500 dark:text-blue-400">
        Shortcut Buddy
      </h1>
      <p className="text-xs md:text-base text-center py-2 text-slate-800 dark:text-slate-200">
        OpenAI-powered tool for learning keyboard shortcuts.
      </p>
    </header>
  );
};

export default Header;
