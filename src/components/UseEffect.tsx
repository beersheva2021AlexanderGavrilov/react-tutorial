import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseEffect = () => {
    // function is called whenever page is being re-rendered
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((r) => {
                setData(r.data[99].email);
                console.log("API WAS CALLED")
            })
            .catch(r => false);
    }, [count])
    //uses useEffect only when something in deps has been changed^,
    //primarily, useEffect uses for making api calls as we load the page
    return (
        <div>
            <br/>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment
            </button>
        </div>
    );
};

export default UseEffect;