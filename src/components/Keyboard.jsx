import {
  BsCommand,
  BsOption,
  BsShiftFill,
  BsCapslockFill,
  BsFillBackspaceFill,
  BsWindows,
} from 'react-icons/bs';
import { ImCtrl } from 'react-icons/im';
import {
  MdKeyboardTab,
  MdOutlineKeyboardReturn,
  MdPowerSettingsNew,
} from 'react-icons/md';

const Keyboard = ({ keyboardLayout }) => {
  if (keyboardLayout == 'mac') {
    return (
      <div className="keyboard layout_mac grid grid-cols-[repeat(30,23px)] grid-rows-[40px,50px,50px,50px,50px,50px] float-left p-2 rounded-lg border-slate-300 dark:border-slate-700 border-2 border-b-4 border-solid bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm gap-1.5 overflow-x-auto max-w-full">
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-3"
          title="esc"
        >
          esc
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F1"
        >
          F1
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F2"
        >
          F2
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F3"
        >
          F3
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F4"
        >
          F4
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F5"
        >
          F5
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F6"
        >
          F6
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F7"
        >
          F7
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F8"
        >
          F8
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F9"
        >
          F9
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F10"
        >
          F10
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F11"
        >
          F11
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F12"
        >
          F12
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-3"
          title="power button"
        >
          <MdPowerSettingsNew className="text-lg" />
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="tilde"
        >
          ~
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="1"
        >
          1
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="2"
        >
          2
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="3"
        >
          3
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="4"
        >
          4
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="5"
        >
          5
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="6"
        >
          6
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="7"
        >
          7
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="8"
        >
          8
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="9"
        >
          9
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="0"
        >
          0
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="minus sign"
        >
          -
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="plus sign"
        >
          +
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-4 pt-0.5"
          title="delete"
        >
          <BsFillBackspaceFill />
          delete
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-3 pt-0.5"
          title="tab"
        >
          <MdKeyboardTab />
          tab
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="q"
        >
          Q
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="w"
        >
          W
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="e"
        >
          E
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="r"
        >
          R
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="t"
        >
          T
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="y"
        >
          Y
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="u"
        >
          U
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="i"
        >
          I
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="o"
        >
          O
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="p"
        >
          P
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="left bracket"
        >
          [
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="right bracket"
        >
          ]
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-3"
          title="backslash"
        >
          \
        </button>
        <button
          disabled
          className="modifier-0 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-4 pt-0.5"
          title="caps lock"
        >
          <BsCapslockFill />
          caps lock
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="a"
        >
          A
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="s"
        >
          S
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="d"
        >
          D
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="f"
        >
          F
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="g"
        >
          G
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="h"
        >
          H
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="j"
        >
          J
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="k"
        >
          K
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="l"
        >
          L
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="semicolon"
        >
          ;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title=""
        >
          '
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-4 pt-0.5"
          title="enter"
        >
          <MdOutlineKeyboardReturn />
          enter
        </button>
        <button
          className="modifier-3 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-5 pt-0.5"
          title="shift"
        >
          <BsShiftFill />
          shift
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="z"
        >
          Z
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="x"
        >
          X
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="c"
        >
          C
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="v"
        >
          V
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="b"
        >
          B
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="n"
        >
          N
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="m"
        >
          M
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="comma"
        >
          ,
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="period"
        >
          .
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="slash"
        >
          /
        </button>
        <button
          className="modifier-3 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-5 pt-0.5"
          title="shift"
        >
          <BsShiftFill />
          shift
        </button>
        <button
          className="modifier-0 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="fn"
        >
          fn
        </button>
        <button
          className="modifier-1 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 pt-0.5"
          title="control"
        >
          <ImCtrl />
          ctrl
        </button>
        <button
          className="modifier-2 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 pt-0.5"
          title="option"
        >
          <BsOption />
          opt
        </button>
        <button
          className="modifier-4 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 pt-0.5"
          title="command"
        >
          <BsCommand />
          cmd
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-[span_14]"
          title="space bar"
        ></button>
        <button
          className="modifier-4 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 pt-0.5"
          title="command"
        >
          <BsCommand />
          cmd
        </button>
        <button
          className="modifier-2 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 pt-0.5"
          title="option"
        >
          <BsOption />
          opt
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="left arrow"
        >
          &larr;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="down arrow"
        >
          &darr;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="up arrow"
        >
          &uarr;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="right arrow"
        >
          &rarr;
        </button>
      </div>
    );
  } else {
    return (
      <div className="keyboard layout_win grid grid-cols-[repeat(30,23px)] grid-rows-[40px,50px,50px,50px,50px,50px] float-left p-2 rounded-lg border-slate-300 dark:border-slate-700 border-2 border-b-4 border-solid bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm gap-1.5 overflow-x-auto max-w-full">
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="Esc"
        >
          esc
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 col-start-5"
          title="F1"
        >
          F1
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F2"
        >
          F2
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F3"
        >
          F3
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F4"
        >
          F4
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 col-start-[14]"
          title="F5"
        >
          F5
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F6"
        >
          F6
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F7"
        >
          F7
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F8"
        >
          F8
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 col-start-[23]"
          title="F9"
        >
          F9
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F10"
        >
          F10
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F11"
        >
          F11
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="F12"
        >
          F12
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="tilde"
        >
          ~
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="1"
        >
          1
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="2"
        >
          2
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="3"
        >
          3
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="4"
        >
          4
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="5"
        >
          5
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="6"
        >
          6
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="7"
        >
          7
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="8"
        >
          8
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="9"
        >
          9
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="0"
        >
          0
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="minus sign"
        >
          -
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="plus sign"
        >
          +
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-4 pt-0.5"
          title="backspace"
        >
          <BsFillBackspaceFill />
          backspace
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-3 pt-0.5"
          title="tab"
        >
          <MdKeyboardTab />
          tab
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="q"
        >
          Q
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="w"
        >
          W
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="e"
        >
          E
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="r"
        >
          R
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="t"
        >
          T
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="y"
        >
          Y
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="u"
        >
          U
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="i"
        >
          I
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="o"
        >
          O
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="p"
        >
          P
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="left bracket"
        >
          [
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="right bracket"
        >
          ]
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-3"
          title="backslash"
        >
          \
        </button>
        <button
          className="modifier-0 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-4 pt-0.5"
          title="caps lock"
        >
          <BsCapslockFill />
          caps lock
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="a"
        >
          A
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="s"
        >
          S
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="d"
        >
          D
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="f"
        >
          F
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="g"
        >
          G
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="h"
        >
          H
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="j"
        >
          J
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="k"
        >
          K
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="l"
        >
          L
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="semicolon"
        >
          ;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title=""
        >
          '
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-4 pt-0.5"
          title="enter"
        >
          <MdOutlineKeyboardReturn />
          enter
        </button>
        <button
          className="modifier-4 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-5 pt-0.5"
          title="shift"
        >
          <BsShiftFill />
          shift
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="z"
        >
          Z
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="x"
        >
          X
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="c"
        >
          C
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="v"
        >
          V
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="b"
        >
          B
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="n"
        >
          N
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="m"
        >
          M
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="comma"
        >
          ,
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="period"
        >
          .
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="slash"
        >
          /
        </button>
        <button
          className="modifier-4 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-5 pt-0.5"
          title="shift"
        >
          <BsShiftFill />
          shift
        </button>
        <button
          className="modifier-2 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="ctrl"
        >
          ctrl
        </button>
        <button
          className="modifier-1 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2 pt-0.5"
          title="windows logo key"
        >
          <BsWindows />
        </button>
        <button
          className="modifier-3 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="alt"
        >
          alt
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-[span_16]"
          title="space bar"
        ></button>
        <button
          className="modifier-3 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="alt"
        >
          alt
        </button>
        <button
          className="modifier-2 flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-2"
          title="ctrl"
        >
          ctrl
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="left arrow"
        >
          &larr;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="down arrow"
        >
          &darr;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="up arrow"
        >
          &uarr;
        </button>
        <button
          className="key flex border-[1px] bg-slate-50 shadow-[0_2px_rgb(203,213,225)] border-slate-300 hover:bg-slate-100 hover:shadow-[0_2px_rgb(148,163,184)] hover:border-slate-400 active:bg-slate-200 active:border-slate-400 active:shadow-none dark:bg-slate-700 dark:shadow-[0_2px_rgb(71,85,105)] dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:shadow-[0_2px_rgb(100,116,139)] dark:hover:border-slate-500 dark:active:bg-slate-800 dark:active:border-slate-700 dark:active:shadow-none active:translate-y-[2px] rounded-lg cursor-pointer items-center justify-center flex-col col-span-1"
          title="right arrow"
        >
          &rarr;
        </button>
      </div>
    );
  }
};

export default Keyboard;
