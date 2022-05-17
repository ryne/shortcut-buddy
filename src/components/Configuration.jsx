import { BsWindows, BsApple } from 'react-icons/bs';
const Configuration = () => {
  return (
    <div
      id="Configuration"
      className="flex justify-start items-center text-slate-800"
    >
      <button className="toggle_os_mac flex flex-row items-center bg-slate-300 dark:bg-slate-700 dark:text-slate-100 hover:dark:text-slate-100 border-1 py-2 px-4 mx-0.5 rounded-t-lg">
        <BsApple className="mr-2" /> macOS
      </button>
      <button className="toggle_os_win flex flex-row items-center bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:dark:text-slate-400 border-1 py-2 px-4 mx-0.5 rounded-t-lg">
        <BsWindows className="mr-2" />
        Windows
      </button>
      <div className="toggle_theme"></div>
    </div>
  );
};

export default Configuration;
