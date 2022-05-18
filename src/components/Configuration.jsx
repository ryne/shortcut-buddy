import { BsWindows, BsApple } from 'react-icons/bs';
const Configuration = ({ keyboardLayout, setOS }) => {
  return (
    <div
      id="Configuration"
      className="flex justify-start items-center text-slate-800"
    >
      <button
        onClick={() => setOS('mac')}
        className={`toggle_os_mac flex flex-row items-center py-2 px-4 mx-0.5 rounded-t-lg bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 bg-slate-300 dark:bg-slate-700 dark:text-slate-100 ${
          keyboardLayout !== 'mac'
            ? 'bg-none bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-500 hover:dark:text-slate-400'
            : ''
        }`}
      >
        <BsApple className="mr-2" /> macOS
      </button>
      <button
        onClick={() => setOS('win')}
        className={`toggle_os_win flex flex-row items-center py-2 px-4 mx-0.5 rounded-t-lg bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 bg-slate-300 dark:bg-slate-700 dark:text-slate-100 ${
          keyboardLayout !== 'win'
            ? 'bg-none bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-500 hover:dark:text-slate-400'
            : ''
        }`}
      >
        <BsWindows className="mr-2" />
        Windows
      </button>
    </div>
  );
};

export default Configuration;
