const Shortcut = ({ prompt, id, response }) => {
  return (
    <div
      className={`shortcut ${id} text-left w-11/12 md:w-[640px] lg:w-[800px] p-4 md:p-6 m-1.5 md:m-3 bg-slate-700 rounded-lg flex flex-col text-center`}
    >
      <p className="text-slate-300 text-xs md:text-sm">{prompt}</p>
      <p className="text-slate-100 font-bold text-sm md:text-base mt-2">
        {response}
      </p>
    </div>
  );
};

export default Shortcut;
