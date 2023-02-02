import React, { useState } from 'react'

function State() {
     const [count, setcount] = useState(0);
     const increment = () =>{
        setcount(count+1);
     }
     const decrement = () =>{
        setcount(count-1);
     }
  return (
    <>
        <button onClick={decrement}>Decrement</button>
        <span className='m-5'>{count}</span>
        <button onClick={increment}>Increment</button>
    </>
  )
}

export default State