import { useEffect, useState } from "react";

export function Counter () {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState('none');

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }, [count]);

    function countUp () {
        if(count === 20) {
            setFlag('block');
            return;
        }
        setCount(count + 1);
    }
    
    function countDown () {
        if(count === 0) return;
        if(count <= 20) {
            setFlag('none');
        } 
        setCount(count - 1);
    }

    return (
        <>
            <p>{count}</p>  
            <p style={{display:flag }}>'Cannot exceed count more than 20!'</p>
            <button onClick={countUp}>Up</button>     
            <button onClick={countDown}>Down</button>   
        </>
    );
}