import React from 'react';
interface Props {
  buttonName: string;
  handleButtonClick: () => {};
}

export default function Button({ buttonName, handleButtonClick }: Props) {
  return (
    <button
      onClick={handleButtonClick}
      className="flex justify-center w-full rounded bg-primary py-2 text-sm font-medium text-gray hover:bg-opacity-90"
      type="submit"
    >
      {buttonName}
    </button>
  );
}
