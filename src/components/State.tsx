import React, {useState} from 'react';

const State = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <br/>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default State;