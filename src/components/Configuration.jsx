import {
  BsWindows,
  BsApple,
  BsLightbulbOffFill,
  BsLightbulbFill,
} from "react-icons/bs";
const Configuration = ({ keyboardLayout, setOS, lightMode, setLight }) => {
  return (
    <div
      id="Configuration"
      className="flex justify-start items-center text-slate-800"
    >
      <button
        onClick={() => setOS("Mac")}
        className={`toggle_os_mac text-sm md:text-base flex flex-row items-center py-2 px-4 mx-0.5 rounded-t-lg bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 bg-slate-300 dark:bg-slate-700 dark:text-slate-100 ${
          keyboardLayout === "Mac"
            ? ""
            : "bg-none bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-500 hover:dark:text-slate-400"
        }`}
      >
        <BsApple className="mr-2" /> macOS
      </button>
      <button
        onClick={() => setOS("Windows")}
        className={`toggle_os_win text-sm md:text-base flex flex-row items-center py-2 px-4 mx-0.5 rounded-t-lg bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 bg-slate-300 dark:bg-slate-700 dark:text-slate-100 ${
          keyboardLayout === "Windows"
            ? ""
            : "bg-none bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-500 hover:dark:text-slate-400"
        }`}
      >
        <BsWindows className="mr-2" />
        Windows
      </button>
      <button
        onClick={() => setLight(lightMode === "dark" ? "light" : "dark")}
        className={`toggle_os_win text-sm md:text-base flex flex-row items-center py-2 px-4 mx-0.5 rounded-t-lg text-slate-400 hover:text-slate-500 dark:text-slate-500 ${
          lightMode === "light" || localStorage.theme !== "dark"
            ? ""
            : "dark:text-slate-500 hover:text-slate-500 hover:dark:text-slate-400"
        }`}
      >
        {lightMode === "dark" ? <BsLightbulbOffFill /> : <BsLightbulbFill />}
      </button>
    </div>
  );
};

export default Configuration;
