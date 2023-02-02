import React, { useState } from 'react'

function Toggle() {
    const [Show, setShow] = useState(false)
    const togglebtn = () => setShow(!Show)

    return(
      <div className='container mt-5'>       
        {Show  ?
        (<p >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>) : null}
         <button onClick={togglebtn} className="btn btn-sm btn-success">{Show?"Hide":"Show"}</button>
      </div>
    )
}

export default Toggle