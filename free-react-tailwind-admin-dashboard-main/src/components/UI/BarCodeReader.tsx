/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
interface Props {
  register: (e) => {};
  name?: string;
}

export default function BarCodeReader({ register, name }: Props) {
  const [barCodeDisplay, setBarCodeDisplay] = useState('');
  const [barCodeScan, setBarCodeScan] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter') {
        handleScan(barCodeScan);
        setBarCodeScan('');
      } else {
        setBarCodeScan(barCodeScan + e.key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [barCodeScan]);

  const handleScan = (barCodeString: string) => {
    console.log('barCodeString', barCodeString);
    setBarCodeDisplay(barCodeString);
  };

  return (
    <div className="w-full">
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        Barcode Number
      </label>
      <input
        {...register(name)}
        type="text"
        value={barCodeDisplay}
        className={` w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
      />
    </div>
  );
}
