import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    const [val, setval] = useState()
  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12 mt-5 mb-2'>
                    <h2 className='text-center'>Welcome to my website</h2>
                </div>
                <div className='col-md-6 bg-light p-5'>
                    <h4>Album example</h4>
                    <p>                    
                        Something short and leading about the collection below— <br/>its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <button className='btn btn-info'>More...</button>
                </div>
                <div className='col-md-6'>
                    <img src="../images/1.png" className="img-fluid p-3" alt="u"/>
                </div>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <img src="../images/Aeroplane.png" className="img-fluid p-5" alt="u"/>
                </div>
                <div className='col-md-6 bg-info p-5'>
                    <h4>Album example</h4>
                    <p>                    
                        Something short and leading about the collection below— <br/>its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <button className='btn btn-danger'>More...</button>
                </div>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6 bg-light p-5'>
                    <h4>Home</h4>
                    <p>                    
                        Something short and leading about the collection below— <br/>its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <NavLink to="/About" className='btn btn-info'>Go to About</NavLink>
                </div>
                <div className='col-md-6'>
                <input type="radio" name="age" value="0-17"       
                    onChange={(e) => {
                        setval(e.target.value);
                    }} 
                /> 0-17<br/>
                <input type="radio" name="age" value="18-35"       
                    onChange={(e) => {
                        setval(e.target.value);
                    }} 
                />18-35<br/>
                <input type="radio" name="age" value="36-60"       
                    onChange={(e)=>{
                        setval(e.target.value);
                    }}
                />36-60<br/>
                <h1>{val}</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home