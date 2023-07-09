import React from 'react'
import App from '../../components/app'
import AboutHero from '../../components/about/about-hero'
import AboutInfo from '../../components/about/about-info'
import { aboutInfoData } from '../../data/about-data'
import { LocationLinksContainer, LocationLinksItem } from '../../components/location-links'
import { locationLinksData } from '../../data/location-links-data'
import { renderItems } from '../../utils/render-items'

function About() {
    return (
        <App>
            <AboutHero />
            <AboutInfo data={aboutInfoData[0]} reverse={true} select='firstAboutInfoCard' />
            <LocationLinksContainer>
                {renderItems(locationLinksData, LocationLinksItem)}
            </LocationLinksContainer>
            <AboutInfo data={aboutInfoData[1]} reverse={false}/>
        </App>
    )
}

export default About