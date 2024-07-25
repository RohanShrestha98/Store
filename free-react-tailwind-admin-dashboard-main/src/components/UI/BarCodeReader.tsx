/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function BarCodeReader({ setBarCodeDisplay, barCodeDisplay }) {
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
    setBarCodeDisplay(barCodeString);
  };

  return (
    <div className="w-full">
      <label className="mb-1 block text-sm font-medium text-black dark:text-white">
        Barcode Number
      </label>
      <input
        type="text"
        placeholder="Scan your barcode"
        value={barCodeDisplay}
        className={` w-full rounded border-[1.5px] border-stroke bg-transparent py-3 h-10 px-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
      />
    </div>
  );
}
