import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    const [color, setcolor] = useState('#2bb0fe')

    const changehandler=()=>{
        setcolor('#000000')
    }

  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12 mt-5 mb-2'>
                    <h2 className='text-center'>Welcome to AboutUs Page</h2>
                </div>
                <div className='col-md-6 bg-danger text-white p-5'>
                    <h4>Album example</h4>
                    <p>                    
                        Something short and leading about the collection below— <br/>its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <button className='btn btn-warning'>More...</button>
                </div>
                <div className='col-md-6'>
                    <img src="../images/map.webp" className="img-fluid p-3" alt="u"/>
                </div>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <img src="../images/1.png" className="img-fluid p-5" alt="u"/>
                </div>
                <div className='col-md-6 bg-warning p-5'>
                    <h4>Album example</h4>
                    <p>                    
                        Something short and leading about the collection below— <br/>its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <button className='btn btn-danger'>More...</button>
                </div>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6 bg-dark text-white p-5'>
                    <h4>About Us</h4>
                    <p>                    
                        Something short and leading about the collection below— <br/>its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <NavLink to="/Home" className='btn btn-info'>Go to Home</NavLink>
                </div>
                <div className='col-md-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="302.171" viewBox="0 0 150 302.171">
                        <g id="Group_7" data-name="Group 7" transform="translate(-139)">
                            <rect id="Rectangle_57" data-name="Rectangle 57" width="7.563" height="76.635" transform="translate(210.218)" fill="#2f4859"/>
                            <g id="bulb" transform="translate(139 72.635)">
                            <path id="Path_17" data-name="Path 17" d="M181.1.008a81.012,81.012,0,0,0,25.853,59.633,75,75,0,1,1-102.543.845C121.088,44.6,131.166,23.03,131.166,0Z" transform="translate(-81.134 39.753)" fill={color}/>
                            <path id="Path_19" data-name="Path 19" d="M214.9,448.663v-9.436a9.436,9.436,0,1,1,18.872,0v9.436Z" transform="translate(-149.331 -429.791)" fill="#ebf0f3"/>
                            <path id="Path_20" data-name="Path 20" d="M174.365,411.505V381.983a8.7,8.7,0,0,1,8.7-8.7h41.2a8.7,8.7,0,0,1,8.7,8.7v29.53Z" transform="translate(-128.667 -364.942)" fill="#2f4859"/>
                            <g id="Group_4" data-name="Group 4" transform="translate(41.986 17.89)">
                                <path id="Path_21" data-name="Path 21" d="M230.506,402.264h-61.4a2.434,2.434,0,0,1,0-4.861h61.4a2.434,2.434,0,0,1,0,4.861Z" transform="translate(-166.793 -385.407)" fill="#ebf0f3"/>
                                <path id="Path_22" data-name="Path 22" d="M230.506,426.738h-61.4a2.434,2.434,0,0,1,0-4.861h61.4a2.434,2.434,0,0,1,0,4.861Z" transform="translate(-166.793 -421.877)" fill="#ebf0f3"/>
                            </g>
                            </g>
                            <path id="Path_23" data-name="Path 23" d="M2453.46,3098.733l-39.3,72.507,131.648-.03-39.722-72.477Z" transform="translate(-2266 -2980)" fill="#2f4859"/>
                            <path id="Path_28" data-name="Path 28" d="M2815.873,3170.3l-1.537,2.549h133.693l-1.537-2.549Z" transform="translate(-2667.216 -2980)" fill="#ebf0f3"/>
                        </g>
                    </svg>
                    <button onClick={changehandler} className='btn btn-success'>{color=='#2bb0fe'?'OFF':'ON'}</button>
                    
                </div>
                
            </div>
        </div>
    </>
  )
}

export default About