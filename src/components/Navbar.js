import React from 'react'

function Navbar() {
  return (
    <div className='row bg-dark'>
        <div className='col-3'>
            <h5 className='text-white'>Logo</h5>
        </div>
        <div className='col-7'>
            <ul class="list-group list-group-horizontal float-end">
                <li class="list-group-item">Home</li>
                <li class="list-group-item">About Me</li>
                <li class="list-group-item">Contact</li>
            </ul>
        </div>
        <div className='col-2'>

        </div>
    </div>
  )
}

export default Navbar