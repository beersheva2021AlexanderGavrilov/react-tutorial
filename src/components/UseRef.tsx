import React, {useRef} from 'react';

const UseRef = () => {
    //to focus on element and manipulate DOM element

    const inputRef = useRef(null);
    const onClick = () => {
        // @ts-ignore
        inputRef.current.value = "";
    }

    return (
        <div>
            <h1>VOLVO</h1>
            <input type="text" placeholder="Type smth" ref={inputRef}/>
            <button onClick={onClick}>Change smth</button>
        </div>
    );
};

export default UseRef;