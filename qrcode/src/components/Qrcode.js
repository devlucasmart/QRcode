import React, { useEffect, useRef } from 'react';
import QrCode from 'qrcode';

export default function QrCodecanvas ({text}) {

    const canvasRef = useRef()
    useEffect (() => {
        QrCode.toCanvas(canvasRef.current,text,{width:500},(error)=>{
            console.log(error)
        })
    },[text])

    return (
        <div>
            <canvas ref={canvasRef} id='canvas'></canvas>
            
        </div>
    )
}


