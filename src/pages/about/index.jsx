import React from 'react'
import App from 'components/app'
import AboutHero from 'pages/about/about-hero'
import AboutInfo from 'pages/about/about-info'
import { aboutInfoData } from 'data/about-data'
import LocationLinksContainer from 'pages/locations/location-links-container'
import LocationLinksItem from 'pages/locations/location-links-item'
import { locationLinksData } from 'data/location-links-data'
import { renderItems } from 'utils/render-items'

function About() {
    return (
        <App>
            <AboutHero />
            <AboutInfo data={aboutInfoData[0]} reverse={false} select='firstAboutInfoCard' />
            <LocationLinksContainer>
                {renderItems(locationLinksData, LocationLinksItem)}
            </LocationLinksContainer>
            <AboutInfo data={aboutInfoData[1]} reverse={true}/>
        </App>
    )
}

export default About