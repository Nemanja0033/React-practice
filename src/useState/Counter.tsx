import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter -1);
    }

  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Increment</button>
    </div>
  )
}

export default Counter