import React, { useState } from 'react'
import QRCode from 'react-qr-code'
const QrCodeGenerator = () => {
    const [qrCode,setQrCode] = useState(" ");
    const [input,setInput] = useState(" ");

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput(" ");
    }
  return (
    <div className='ml-52 mt-3 flex flex-col text-center border border-gray-100'>
      <h1>Qr code Generator</h1>
      <div>
        <input className='border border-gray-400' onChange={(e) =>setInput( e.target.value)} value={input} type="text" name="qr-code" placeholder='Enter your value here' />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={() => {handleGenerateQrCode()}}>Generate</button>
      </div>
      <div className='flex justify-center items-center'>
        <QRCode 
  id="qr-code-value" value={qrCode} size={400}>
           
        </QRCode>
      </div>
    </div>
  )
}

export default QrCodeGenerator
