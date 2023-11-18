import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={handleInputChange}
      />
      {text && <QRCode value={text} />}
    </div>
  );
}

export default QRCodeGenerator;