import React, {createContext} from 'react';
import {AppContext} from "./UseContext";

const User = () => {
    // @ts-ignore
    const {username} = createContext(AppContext);

    return (
        <div>
            <h1>USER: {username}</h1>
        </div>
    );
};

export default User;