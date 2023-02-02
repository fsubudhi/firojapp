import React,{useCallback, useState} from 'react'
import UsecallbackMemoChild from './UsecallbackMemoChild'

function UsecallbackMemoparent() {
  const [a, seta] = useState(10);
  const [b, setb] = useState(20);


  const f1 = useCallback(
    () => {
      alert('i am F1');
    },
    [],
  )
  

  return (
    <>
      <h1>I am Parent</h1>
      <div>UsecallbackMemoParent B: {b}</div>
      <button onClick={()=>{seta(a+1)}}>Increment A</button>
      <button onClick={()=>{setb(b+1)}}>Increment B</button>
      <hr/>
      <UsecallbackMemoChild a={a}  f1={f1}/>
    </>
  )
}

export default UsecallbackMemoparent