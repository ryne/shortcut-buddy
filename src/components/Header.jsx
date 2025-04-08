const Header = () => {
  return (
    <header id="Header" className="py-6 md:py-8 lg:py-12 block">
      <h1 className="text-center text-3xl md:text-4xl font-black text-blue-500 dark:text-blue-400">
        Shortcut Buddy
      </h1>
      <p className="text-sm md:text-base text-center pt-2 text-slate-800 dark:text-slate-200">
        Gemini-powered tool for learning keyboard shortcuts.
      </p>
    </header>
  );
};

export default Header;
