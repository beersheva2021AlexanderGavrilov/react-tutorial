import React, {useEffect, useLayoutEffect, useRef} from 'react';

const UseLayoutEffect = () => {

    //calls always before useEffect, has a priority
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        // @ts-ignore
        console.log(inputRef.current.value);
        console.log("UseLayoutEffect");
    }, []);

    useEffect(() => {
        console.log("useEffect");
        // @ts-ignore
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div>
            <input ref={inputRef} value="S60" style={{width: 400, height: 400}}/>
        </div>
    );
};

export default UseLayoutEffect;