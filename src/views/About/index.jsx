import React from 'react'
import App from '../../components/app'
import AboutHero from '../../components/about/about-hero'
import AboutInfo from '../../components/about/about-info'
import { aboutInfoData } from '../../data/about-data' 
function About() {
    return (
        <App>
            <AboutHero />
            <AboutInfo data={aboutInfoData[0]} />
            <AboutInfo data={aboutInfoData[1]} />
        </App>
    )
}

export default About