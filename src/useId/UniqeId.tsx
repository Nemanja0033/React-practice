import  { useId } from 'react'

const UniqeId = () => {

    const id = useId();

  return (
    <div>
        <form action="">
            <input id={`${id} - email`} type="text" placeholder='email' />
            <input id={`${id} - pass`} type="text" placeholder='pass'/>
        </form>
    </div>
  )
}

export default UniqeId