import React from 'react'

function ProductHeader() {
  return (
    <>
        <div className='container-fluid headerpart'>
            <div className='row'>
                <div className='col-md-1'>
                    <img src="./images/Myntra_logo.png" className="img-fluid p-4 logo" alt="..."/>
                </div>
                <div className='col-md-11'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 Headrernavbar">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">HOME & LIVING</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Beauty</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Studio<span className='badge'>new</span></a>
                            </li>
                            {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li> */}
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-1" type="search" placeholder="Search for Products, Brands and More" aria-label="Search"/>
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductHeader