import React from 'react'
import phone from '../../assets/home/desktop/image-hero-phone2.png'

function HomeHero() {
    return (
        <header className='container home-hero-container'>
            <div className='home-hero-wrapper'>
                <div>
                    <h1 className='title light-text home-hero-title'>
                        Award-winning custom designs and digital branding solutions
                    </h1>
                    <p className='paragraph light-text home-hero-paragraph'>
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>
                    <button className='primary-btn btn-on-dark'>LEARN MORE</button>
                </div>
                <div className='home-hero-img-container'>
                    <img className='home-hero-img' src={phone} alt="" />
                </div>
            </div>
        </header>
    )
}

export default HomeHero