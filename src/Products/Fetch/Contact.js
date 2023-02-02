import React from 'react'
import FolderExplorer from './FolderExplorer'
import data from './data.json'

const Contact =()=> {
  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12 mt-5 mb-2'>
                    <h2 className='text-center'>Welcome to Contact Page</h2>
                </div>               
                <div className='col-md-6'>
                    <img src="../images/map.webp" className="img-fluid p-3" alt="u"/>
                </div>
                <div className='col-md-6'>               
                    <p>  
                        <FolderExplorer data={data}/>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact