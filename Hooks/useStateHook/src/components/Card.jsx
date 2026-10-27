import { useState } from "react";

export function Card () {

    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(400);

    function rowUp () {
        if(width === 900) return;
        setWidth(width + 10);
    }

    function colUp () {
        if(height === 900) return;
        setHeight(height + 10);
    }

    function rowDown () {
        if(width === 100) return;
        setWidth(width - 10);
    }

    function colDown () {
        if(height === 100) return;
        setHeight(height - 10);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,borderStyle: 'solid', borderWidth: '2px', padding: '10px', width: 'fit-content'}}>
            <img width={`${width}px`} height={`${height}px`} src="data:image/jpeg;base64,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" />
            <div style={{display: 'grid',  gridTemplateColumns: '90px 90px', marginTop: '10px', gap: "20px"}}>
                <button onClick={rowUp} >row+</button>
                <button onClick={colUp} >col+</button>
                <button onClick={rowDown} >row-</button>
                <button onClick={colDown} >col-</button>
            </div>
        </div>
    );

}