import React from 'react';
interface Props {
  buttonName: string;
}

export default function Button({ buttonName }: Props) {
  return (
    <button
      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
      type="submit"
    >
      {buttonName}
    </button>
  );
}
