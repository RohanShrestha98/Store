/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function BarCodeReader({ barCodeScan, setBarCodeScan }) {
  const [barCodeDisplay, setBarCodeDisplay] = useState("No bar code scan");
  //   const [barCodeScan, setBarCodeScan] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleScan(barCodeScan);
        setBarCodeScan("");
      } else {
        setBarCodeScan(barCodeScan + e.key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [barCodeScan]);

  const handleScan = (barCodeString) => {
    console.log("barCodeString", barCodeString);
    setBarCodeDisplay(barCodeString);
  };

  return <div>{barCodeDisplay}</div>;
}
