import React, { useState, useEffect } from 'react'
import logo from 'assets/shared/desktop/logo-dark.png'
import { Link } from "react-router-dom"
import './navbar.css'
import Navlist from './navlist'

function Navbar() {
      const [isMobile, setIsMobile] = useState(false)
      const [isBurgerClicked, setIsBurgerClicked] = useState(false)

      useEffect(() => {
        // Function to handle the media query change
        const handleMediaQueryChange = (mediaQueryList) => {
          setIsMobile(mediaQueryList.matches)
        }
    
        /*MDN: You can create a MediaQueryList by calling matchMedia() on the window object.
        A MediaQueryList object stores information on a media query applied to a document, 
        with support for both immediate and event-driven matching against the state of the document.*/

        // Initial check for the media query
        const initialMatch = window.matchMedia('(max-width: 680px)')
        handleMediaQueryChange(initialMatch)

        // Add event listener for future changes
        const mediaQueryList = window.matchMedia('(max-width: 680px)')
        mediaQueryList.addEventListener('change', handleMediaQueryChange)
    
        // Clean up the event listener on component unmount
        return () => {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange)
        }
      }, []) // Empty dependency array ensures this effect runs once on mount

    function handleBurgerMenuClick() {
        setIsBurgerClicked(isBurgerClicked === false ? true : false)
    }

    return (
        <nav className='container navbar-container'>
            <Link to='/'>
                <img className='navbar-logo' src={logo} alt="" />
            </Link>
            <Navlist mobile={isMobile} show={isBurgerClicked}/>
            <button class="burger-menu" aria-label="Toggle Menu" onClick={handleBurgerMenuClick}>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </button>
        </nav>
    )
}

export default Navbar