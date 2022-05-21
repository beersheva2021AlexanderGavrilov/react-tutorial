import React from 'react';
import logo from './logo.svg';
import './App.css';
import State from "./components/State";
import StateInput from "./components/StateInput";
import Reducer from "./components/Reducer";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseContext from "./components/UseContext";


function App() {
    return (
        <div className="App">
            <State/>
            <StateInput/>
            <Reducer/>
            <UseEffect/>
            <UseRef/>
            <UseLayoutEffect/>
            <UseContext/>
        </div>
    );
}

export default App;
