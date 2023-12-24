import React from 'react'
import logo from 'assets/shared/desktop/logo-dark.png'
import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <nav className='container navbar-container'>
            <Link to='/'>
                <img className='navbar-logo' src={logo} alt="" />
            </Link>
            <ul className='navbar-list'>
                <li>
                    <Link to='/about' className='navbar-list-a'>OUR COMPANY</Link>
                </li>
                <li>
                    <Link to='/locations' className='navbar-list-a'>LOCATIONS</Link>
                </li>
                <li>
                    <Link to='/contact' className='navbar-list-a'>CONTACT</Link>
                </li>
            </ul>
            <div class="burger-menu">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </div>
        </nav>
    )
}

export default Navbar