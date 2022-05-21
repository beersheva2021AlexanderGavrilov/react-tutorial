import React, {useReducer} from 'react';

const Reducer = () => {
    const reducerfn = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count: state.count + 1, showText: state.showText}
            case "toggleShowText":
                return {count: state.count, showText: !state.showText}
            default:
                return state;
        }
    }

    const [state, dispatchfn] = useReducer(reducerfn, {count: 0, showText: true});

    return (
        <div>
            <br/>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatchfn({type: "INCREMENT"});
                    dispatchfn({type: "toggleShowText"})
                }}
            >
                Click here
            </button>
            {state.showText && <p>This is a text</p>}
        </div>
    );
};

export default Reducer;