import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-black bg-opacity-50 fixed-top  ">
  <div className="container-fluid "> 
    <NavLink className="navbar-brand fw-bolder" exact='' to='/' >Tracker</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="Crypto">Crypto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="Currency">Currency</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>  )
}
