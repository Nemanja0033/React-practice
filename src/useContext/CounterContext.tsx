import { createContext, useState } from "react";


const CounterContext = createContext({
    counter: 0,
    add:() => {},
    remove:() => {},
});

export const CounterProvider = ({children}: {children: React.ReactNode}) => {
    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter + 1)
    }

    const remove = () => {
        setCounter(counter == 0 ? counter : counter - 1)
    }


    return(
        <CounterContext.Provider value={{counter, add, remove}}>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterContext}