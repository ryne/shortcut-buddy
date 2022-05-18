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
      <div className="keyboard layout_mac grid float-left p-2 rounded-lg border-slate-300 dark:border-slate-700 border-2 border-b-4 border-solid bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm gap-1.5 overflow-x-auto max-w-full">
        <button className="key col-span-3" title="Esc">
          esc
        </button>
        <button className="key col-span-2" title="F1">
          F1
        </button>
        <button className="key col-span-2" title="F2">
          F2
        </button>
        <button className="key col-span-2" title="F3">
          F3
        </button>
        <button className="key col-span-2" title="F4">
          F4
        </button>
        <button className="key col-span-2" title="F5">
          F5
        </button>
        <button className="key col-span-2" title="F6">
          F6
        </button>
        <button className="key col-span-2" title="F7">
          F7
        </button>
        <button className="key col-span-2" title="F8">
          F8
        </button>
        <button className="key col-span-2" title="F9">
          F9
        </button>
        <button className="key col-span-2" title="F10">
          F10
        </button>
        <button className="key col-span-2" title="F11">
          F11
        </button>
        <button className="key col-span-2" title="F12">
          F12
        </button>
        <button className="key col-span-3" title="Power button">
          <MdPowerSettingsNew className="text-lg" />
        </button>
        <button className="key col-span-2" title="tilde">
          ~
        </button>
        <button className="key col-span-2" title="1">
          1
        </button>
        <button className="key col-span-2" title="2">
          2
        </button>
        <button className="key col-span-2" title="3">
          3
        </button>
        <button className="key col-span-2" title="4">
          4
        </button>
        <button className="key col-span-2" title="5">
          5
        </button>
        <button className="key col-span-2" title="6">
          6
        </button>
        <button className="key col-span-2" title="7">
          7
        </button>
        <button className="key col-span-2" title="8">
          8
        </button>
        <button className="key col-span-2" title="9">
          9
        </button>
        <button className="key col-span-2" title="0">
          0
        </button>
        <button className="key col-span-2" title="-">
          -
        </button>
        <button className="key col-span-2" title="+">
          +
        </button>
        <button className="key col-span-4 pt-0.5" title="delete">
          <BsFillBackspaceFill />
          delete
        </button>
        <button className="key col-span-3 pt-0.5" title="tab">
          <MdKeyboardTab />
          tab
        </button>
        <button className="key col-span-2" title="q">
          Q
        </button>
        <button className="key col-span-2" title="w">
          W
        </button>
        <button className="key col-span-2" title="e">
          E
        </button>
        <button className="key col-span-2" title="r">
          R
        </button>
        <button className="key col-span-2" title="t">
          T
        </button>
        <button className="key col-span-2" title="y">
          Y
        </button>
        <button className="key col-span-2" title="u">
          U
        </button>
        <button className="key col-span-2" title="i">
          I
        </button>
        <button className="key col-span-2" title="o">
          O
        </button>
        <button className="key col-span-2" title="p">
          P
        </button>
        <button className="key col-span-2" title="left bracket">
          [
        </button>
        <button className="key col-span-2" title="right bracket">
          ]
        </button>
        <button className="key col-span-3" title="backslash">
          \
        </button>
        <button className="modifier col-span-4 pt-0.5" title="caps lock">
          <BsCapslockFill />
          caps lock
        </button>
        <button className="key col-span-2" title="a">
          A
        </button>
        <button className="key col-span-2" title="s">
          S
        </button>
        <button className="key col-span-2" title="d">
          D
        </button>
        <button className="key col-span-2" title="f">
          F
        </button>
        <button className="key col-span-2" title="g">
          G
        </button>
        <button className="key col-span-2" title="h">
          H
        </button>
        <button className="key col-span-2" title="j">
          J
        </button>
        <button className="key col-span-2" title="k">
          K
        </button>
        <button className="key col-span-2" title="l">
          L
        </button>
        <button className="key col-span-2" title="semicolon">
          ;
        </button>
        <button className="key col-span-2" title="">
          '
        </button>
        <button className="modifier col-span-4 pt-0.5" title="return">
          <MdOutlineKeyboardReturn />
          return
        </button>
        <button className="modifier col-span-5 pt-0.5" title="shift">
          <BsShiftFill />
          shift
        </button>
        <button className="key col-span-2" title="z">
          Z
        </button>
        <button className="key col-span-2" title="x">
          X
        </button>
        <button className="key col-span-2" title="c">
          C
        </button>
        <button className="key col-span-2" title="v">
          V
        </button>
        <button className="key col-span-2" title="b">
          B
        </button>
        <button className="key col-span-2" title="n">
          N
        </button>
        <button className="key col-span-2" title="m">
          M
        </button>
        <button className="key col-span-2" title="comma">
          ,
        </button>
        <button className="key col-span-2" title="period">
          .
        </button>
        <button className="key col-span-2" title="slash">
          /
        </button>
        <button className="modifier col-span-5 pt-0.5" title="shift">
          <BsShiftFill />
          shift
        </button>
        <button className="modifier col-span-2" title="fn">
          fn
        </button>
        <button className="modifier col-span-2 pt-0.5" title="control">
          <ImCtrl />
          ctrl
        </button>
        <button className="modifier col-span-2 pt-0.5" title="option">
          <BsOption />
          opt
        </button>
        <button className="modifier col-span-2 pt-0.5" title="command">
          <BsCommand />
          cmd
        </button>
        <button className="key col-[span_14]" title="space bar"></button>
        <button className="modifier col-span-2 pt-0.5" title="command">
          <BsCommand />
          cmd
        </button>
        <button className="modifier col-span-2 pt-0.5" title="option">
          <BsOption />
          opt
        </button>
        <button className="key col-span-1" title="left arrow">
          &larr;
        </button>
        <button className="key col-span-1" title="down arrow">
          &darr;
        </button>
        <button className="key col-span-1" title="up arrow">
          &uarr;
        </button>
        <button className="key col-span-1" title="right arrow">
          &rarr;
        </button>
      </div>
    );
  } else {
    return (
      <div className="keyboard layout_win grid float-left p-2 rounded-lg border-slate-300 dark:border-slate-700 border-2 border-b-4 border-solid bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm gap-1.5 overflow-x-auto max-w-full">
        <button className="key col-span-2" title="Esc">
          esc
        </button>
        <button className="key col-span-2 col-start-5" title="F1">
          F1
        </button>
        <button className="key col-span-2" title="F2">
          F2
        </button>
        <button className="key col-span-2" title="F3">
          F3
        </button>
        <button className="key col-span-2" title="F4">
          F4
        </button>
        <button className="key col-span-2 col-start-[14]" title="F5">
          F5
        </button>
        <button className="key col-span-2" title="F6">
          F6
        </button>
        <button className="key col-span-2" title="F7">
          F7
        </button>
        <button className="key col-span-2" title="F8">
          F8
        </button>
        <button className="key col-span-2 col-start-[23]" title="F9">
          F9
        </button>
        <button className="key col-span-2" title="F10">
          F10
        </button>
        <button className="key col-span-2" title="F11">
          F11
        </button>
        <button className="key col-span-2" title="F12">
          F12
        </button>
        <button className="key col-span-2" title="tilde">
          ~
        </button>
        <button className="key col-span-2" title="1">
          1
        </button>
        <button className="key col-span-2" title="2">
          2
        </button>
        <button className="key col-span-2" title="3">
          3
        </button>
        <button className="key col-span-2" title="4">
          4
        </button>
        <button className="key col-span-2" title="5">
          5
        </button>
        <button className="key col-span-2" title="6">
          6
        </button>
        <button className="key col-span-2" title="7">
          7
        </button>
        <button className="key col-span-2" title="8">
          8
        </button>
        <button className="key col-span-2" title="9">
          9
        </button>
        <button className="key col-span-2" title="0">
          0
        </button>
        <button className="key col-span-2" title="-">
          -
        </button>
        <button className="key col-span-2" title="+">
          +
        </button>
        <button className="key col-span-4 pt-0.5" title="backspace">
          <BsFillBackspaceFill />
          backspace
        </button>
        <button className="key col-span-3 pt-0.5" title="tab">
          <MdKeyboardTab />
          tab
        </button>
        <button className="key col-span-2" title="q">
          Q
        </button>
        <button className="key col-span-2" title="w">
          W
        </button>
        <button className="key col-span-2" title="e">
          E
        </button>
        <button className="key col-span-2" title="r">
          R
        </button>
        <button className="key col-span-2" title="t">
          T
        </button>
        <button className="key col-span-2" title="y">
          Y
        </button>
        <button className="key col-span-2" title="u">
          U
        </button>
        <button className="key col-span-2" title="i">
          I
        </button>
        <button className="key col-span-2" title="o">
          O
        </button>
        <button className="key col-span-2" title="p">
          P
        </button>
        <button className="key col-span-2" title="left bracket">
          [
        </button>
        <button className="key col-span-2" title="right bracket">
          ]
        </button>
        <button className="key col-span-3" title="backslash">
          \
        </button>
        <button className="modifier col-span-4 pt-0.5" title="caps lock">
          <BsCapslockFill />
          caps lock
        </button>
        <button className="key col-span-2" title="a">
          A
        </button>
        <button className="key col-span-2" title="s">
          S
        </button>
        <button className="key col-span-2" title="d">
          D
        </button>
        <button className="key col-span-2" title="f">
          F
        </button>
        <button className="key col-span-2" title="g">
          G
        </button>
        <button className="key col-span-2" title="h">
          H
        </button>
        <button className="key col-span-2" title="j">
          J
        </button>
        <button className="key col-span-2" title="k">
          K
        </button>
        <button className="key col-span-2" title="l">
          L
        </button>
        <button className="key col-span-2" title="semicolon">
          ;
        </button>
        <button className="key col-span-2" title="">
          '
        </button>
        <button className="modifier col-span-4 pt-0.5" title="return">
          <MdOutlineKeyboardReturn />
          return
        </button>
        <button className="modifier col-span-5 pt-0.5" title="shift">
          <BsShiftFill />
          shift
        </button>
        <button className="key col-span-2" title="z">
          Z
        </button>
        <button className="key col-span-2" title="x">
          X
        </button>
        <button className="key col-span-2" title="c">
          C
        </button>
        <button className="key col-span-2" title="v">
          V
        </button>
        <button className="key col-span-2" title="b">
          B
        </button>
        <button className="key col-span-2" title="n">
          N
        </button>
        <button className="key col-span-2" title="m">
          M
        </button>
        <button className="key col-span-2" title="comma">
          ,
        </button>
        <button className="key col-span-2" title="period">
          .
        </button>
        <button className="key col-span-2" title="slash">
          /
        </button>
        <button className="modifier col-span-5 pt-0.5" title="shift">
          <BsShiftFill />
          shift
        </button>
        <button className="modifier col-span-2" title="ctrl">
          ctrl
        </button>
        <button className="modifier col-span-2 pt-0.5" title="Windows logo key">
          <BsWindows />
        </button>
        <button className="modifier col-span-2" title="alt">
          alt
        </button>
        <button className="key col-[span_16]" title="space bar"></button>
        <button className="modifier col-span-2" title="alt">
          alt
        </button>
        <button className="modifier col-span-2" title="ctrl">
          ctrl
        </button>
        <button className="key col-span-1" title="left arrow">
          &larr;
        </button>
        <button className="key col-span-1" title="down arrow">
          &darr;
        </button>
        <button className="key col-span-1" title="up arrow">
          &uarr;
        </button>
        <button className="key col-span-1" title="right arrow">
          &rarr;
        </button>
      </div>
    );
  }
};

export default Keyboard;
