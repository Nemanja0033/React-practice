import {  useReducer } from "react";

const intialState = 0;

const counterReducer = (state: number, action: { type: any; }) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(counterReducer, intialState);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        </div>
    )
}


export default Counter