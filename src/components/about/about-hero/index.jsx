import React from 'react'
import aboutImgDesktop from '../../../assets/about/desktop/image-about-hero.jpg'
import aboutImgTablet from '../../../assets/about/tablet/image-about-hero.jpg'

function AboutHero() {

    return (
        <header className='container about-hero-container remove-padding'>
            <div className='about-hero-title-wrapper'>
                <h1 className='title light-text'>About Us</h1>
                <p className='paragraph light-text about-hero-paragraph'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
            </div>
            <div className='about-hero-img-container'>
                <img className='about-hero-img about-hero-img-desktop' src={aboutImgDesktop} alt="" />
                <img className='about-hero-img about-hero-img-tablet' src={aboutImgTablet} alt="" />
            </div>
        </header>
    )
}

export default AboutHero