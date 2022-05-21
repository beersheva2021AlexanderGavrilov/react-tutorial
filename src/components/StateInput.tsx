import React, {useState} from 'react';

const StateInput = () => {
    const [inputValue, setInputValue] = useState("Initial state");
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div>
            <br/>
            <input onChange={onChange} placeholder="enter something..."/>
            {inputValue}
        </div>
    );
};

export default StateInput;