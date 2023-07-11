import logo from '../../../assets/shared/desktop/logo-light.png'
import facebook from '../../../assets/shared/desktop/icon-facebook.svg'
import youtube from '../../../assets/shared/desktop/icon-youtube.svg'
import twitter from '../../../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../../assets/shared/desktop/icon-instagram.svg'
import './footer.css'



import React from 'react'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="footer-navbar">
                    <img className='footer-logo' src={logo} alt="" />
                    <hr className='footer-line-style footer-line-under-img'/>
                    <ul className='footer-navbar-list'>
                        <li>OUR COMPANY</li>
                        <li>LOCATIONS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <hr className='footer-line-style footer-line'/>
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
                    <div className='footer-social-media'>
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer