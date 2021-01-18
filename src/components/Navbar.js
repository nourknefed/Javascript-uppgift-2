import React from 'react'
import logo from '../assets/n-logo.png'

const Navbar = () => {
    return (
<div>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="" width="55" height="45" className="d-inline-block align-top"  />
            <h1 className="ms-1">our Library</h1>
            </a>
        </div>
    </nav>
</div>
    )
}

export default Navbar
