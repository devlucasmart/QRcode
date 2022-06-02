import { useState } from 'react';
import './App.css';
import QrCode from './components/Qrcode';

function Qrcodeho() {
    const [text,setText] = useState("Digite Alguma coisa")
  
    return (
      <div className="Qrcodeho">
        <textarea onChange={(element)=>{setText(element.target.value)}} value={text}></textarea>
        <QrCode text={text}></QrCode>
      </div>
    );
  }
  
  export default Qrcodeho;