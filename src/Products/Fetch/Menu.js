import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Notfound from './Notfound'
import {Routes, Route, NavLink} from 'react-router-dom'
import EmployeeCURD from './EmployeeCURD'


function Menu() {
  return (
    <>
    <div className='container-fluid bg-light fixed-top'>
        <div className='row'>
            <div className='col-md-12'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <NavLink className="navbar-brand text-info" to="/Home">Logo</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto ">
                             <li className="nav-item">
                                <NavLink to="./Home" className="nav-link" ><i class="bi bi-house-door-fill text-secondary"></i> Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./About" className="nav-link" ><i class="bi bi-person-fill text-secondary"></i> About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/EmployeeCURD" className="nav-link" ><i class="bi bi-people-fill text-secondary"></i> EmployeeCURD</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contact" className="nav-link" ><i class="bi bi-geo-fill text-secondary"></i> Contact</NavLink>
                            </li> 
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-building text-secondary"></i> Company
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/Home"><i class="bi bi-house-door-fill text-secondary"></i> Home</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/About"><i class="bi bi-person-fill text-secondary"></i> About Me</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><NavLink className="dropdown-item" to="/Contact"><i class="bi bi-geo-fill text-secondary"></i> Location</NavLink></li>
                            </ul>
                            </li>                           
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div> 
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/EmployeeCURD" element={<EmployeeCURD/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
    </Routes>
           
    </>
  )
}

export default Menu