import logo from '../../assets/shared/desktop/logo-light.png'

import React from 'react'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="footer-navbar">
                    <img className='footer-logo' src={logo} alt="" />
                    <ul className='footer-navbar-list'>
                        <li>OUR COMPANY</li>
                        <li>LOCATIONS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <hr className='footer-line'/>
                <div className="footer-contact">
                    <div className='footer-contact-info'>
                        <h1 className='footer-text footer-text-bold'>Designo Central Office</h1>
                        <p className='footer-text'>3886 Wellington Street</p>
                        <p className='footer-text'>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className='footer-contact-info'>
                        <h1 className='footer-text footer-text-bold'>Contact Us (Central Office)</h1>
                        <p className='footer-text footer-text-bold'>P : +1 253-863-8967</p>
                        <p className='footer-text footer-text-bold'>M : contact@designo.co</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer