import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog';
import { useEffect, useState } from 'react';
import BarCodeReader from './BarCodeReader';
export default function BarCodeModal({
  asChild,
  setOpen,
  open,
  children,
  barCodeDisplay,
  setBarCodeDisplay,
}) {
  useEffect(() => {
    if (barCodeDisplay) {
      setOpen(false);
    }
    // setTimeout(() => {
    //   setBarCodeDisplay(1234);
    //   setOpen(false);
    // }, 2000);
  }, [barCodeDisplay]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent className="max-w-[325px]  min-w-[300px] bg-[#FAFAFA]">
        <DialogTitle className="text-[#22244D] font-medium text-base">
          Scan Barcode
        </DialogTitle>
        <div>
          {/* <input type="text" className="border" /> */}
          <BarCodeReader
            setBarCodeDisplay={setBarCodeDisplay}
            barCodeDisplay={barCodeDisplay}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
