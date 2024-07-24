import { useState } from 'react';

const SwitcherOne = ({ enabled, setEnabled }) => {
  return (
    <div>
      <label
        htmlFor="toggle1"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="block h-7 w-12 rounded-full !bg-primary dark:bg-[#5A616B]"></div>
          <div
            className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition ${
              enabled && '!right-1 !translate-x-full  dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherOne;
