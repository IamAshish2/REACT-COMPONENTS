import { useState, useRef } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const inputElement = useRef(null);

  function generateQrCode() {
    if (!inputElement.current || inputElement.current.value.trim() === "") {
      alert("Input cannot be empty!");
      return;
    }

    const inputValue = inputElement.current.value;
    setQrCode(inputValue);
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
      <div className="">
        <h1 className="text-center  text-lg font-mono font-bold">
          Generate Qr code
        </h1>
        <input ref={inputElement} className="border rounded-sm p-2" />
        <button
          onClick={() => {
            generateQrCode();
          }}
          className="border rounded-lg p-2 ml-2 text-white font-bold bg-indigo-400"
        >
          Generate Qr code
        </button>
      </div>

      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "50%", width: "100%" }}
        value={qrCode}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrGenerator;
