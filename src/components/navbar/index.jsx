import React from 'react'
import logo from '../../assets/shared/desktop/logo-dark.png'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='container navbar-container'>
            <Link to='/'>
                <img className='navbar-logo' src={logo} alt="" />
            </Link>
            <ul className='navbar-list'>
                <li>
                    <Link to='/about'>OUR COMPANY</Link>
                </li>
                <li>
                    <Link to='/locations'>LOCATIONS</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar