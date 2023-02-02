import React from 'react'

function UsecallbackMemoChild(props) {
    console.log("child render Again");
  return (
      
    <div>UsecallbackMemoChild A: {props.a}</div>
  )
}

export default React.memo(UsecallbackMemoChild);