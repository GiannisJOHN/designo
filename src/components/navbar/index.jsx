import React from 'react'
import logo from '../../assets/shared/desktop/logo-dark.png'

function Navbar() {
    return (
        <nav className='container navbar-container'>
            <img className='navbar-logo' src={logo} alt="" />
            <ul className='navbar-list'>
                <li>OUR COMPANY</li>
                <li>LOCATIONS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navbar