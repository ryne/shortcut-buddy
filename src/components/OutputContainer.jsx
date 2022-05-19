import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import Shortcut from './Shortcut';
const OutputContainer = ({ shortcutList }) => {
  useEffect(() => {
    console.log(shortcutList);
    if (shortcutList.length !== 0) {
      scroller.scrollTo('ShortcutBox', {
        duration: 2000,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
      scroller.scrollTo('ShortcutBoxTop', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'ShortcutBox',
      });
    }
  }, [shortcutList]);
  return (
    <section
      id="OutputContainer"
      className="min-w-full h-36 md:h-40 bg-slate-200 dark:bg-slate-800 dark:shadow-[0_0_30px_0_inset_rgba(0,0,0,0.2)]"
    >
      <div
        id="ShortcutBox"
        className="overflow-y-scroll h-full py-1.5 md:py-3 flex flex-col-reverse items-center"
      >
        <div className="ShortcutBoxTop"></div>
        {shortcutList.map(({ prompt, id, response }) => {
          return (
            <Shortcut prompt={prompt} id={id} response={response} key={id} />
          );
        })}
      </div>
    </section>
  );
};

export default OutputContainer;
