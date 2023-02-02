import React,{useState} from 'react'

// function EventHandler() {
//     const [num1, setnum1] = useState(0);
//     const [num2, setnum2] = useState(0);
//     const [Total, setTotal] = useState(0);
//     const handler1 =(e)=>{
//         setnum1(+e.target.value);
//     }
//     const handler2 =(e)=>{
//         setnum2(+e.target.value);
//     }
//     const adtion = ()=>{
//         setTotal(num1+num2);
//     }
//   return (
//     <div className='container mt-4'>
//         <div className='row'>
//             <div className='col-12'>
//                 <input onChange={handler1}/><br/>
//                 <input onChange={handler2}/>
//                 <p>Total: {Total}</p>
//                 <button onClick={adtion}>ADD</button>
//             </div>
//         </div>
//     </div>
//   )
// }





function EventHandlerFC() {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [Total, setTotal] = useState(0);
    const handler =(e)=>{
        setnum1(+e.target.value);
    }
    const adtion = ()=>{
        setTotal(num1+num2);
    }
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-12'>
                <input name='num1' onChange={(e)=>setnum1(+e.target.value)}/><br/>
                <input name='num2' onChange={(e)=>setnum2(+e.target.value)}/>
                <p>Total: {Total}</p>
                <button onClick={adtion}>ADD</button>
            </div>
        </div>
    </div>
  )
}



export default EventHandlerFC