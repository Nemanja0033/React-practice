
import { useRef, useState } from 'react'

const FocusInput = () => {

    const [value] = useState<string>('Some Text');

    const inputRef = useRef<any>()

    const focusinput = () => {
        inputRef.current.focus();
    }

    const clearInput = () => {
        inputRef.current.value = '';
    }

  return (
    <div>
        <input value={value} type="text" ref={inputRef} />
        <button onClick={clearInput}>Delete</button>
    </div>
  )
}

export default FocusInput