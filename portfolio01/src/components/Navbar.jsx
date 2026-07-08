import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid fw-bolder">
    <a className="navbar-brand text-light mx-2" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fw-bolder " id="navbarNav">
      <ul className="navbar-nav  me-auto px-5">
        <li className="nav-item px-3">
          <NavLink className="nav-link  text-light" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link text-light" to="/About">About</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link text-light" to="/Skills">Skills</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link text-light" to="/Projects">Projects</NavLink>
        </li>
        <div className="font d-flex  ms-auto ">
        <li><a href=""><i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/anushkagarwal-web/MERN"target="blank"><i class="fa fa-github"></i></a></li>
         <li><a href=""><i class="fa fa-instagram"></i></a></li>
        </div>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
