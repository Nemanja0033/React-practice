import {  useContext } from "react"
import { CounterContext, CounterProvider } from "./useContext/CounterContext"
import Counter from "./useReducer/CounterReducer";
import FocusInput from "./useRef/FocusInput";

const CartCounter = () => {
  const { counter } =  useContext(CounterContext);

return(
  <div>Products in cart: {counter}</div>
)

}

const Products = () => {
  const {add, remove} = useContext(CounterContext)

  
  
  return(<div>
    <h1>Products</h1>
    <button onClick={add}>Add to cart</button>
    <button onClick={remove}>Remove from cart</button>
  </div>)
}

const App = () => {
  return (
    <div>
      <FocusInput />
    </div>
  )
}

export default App