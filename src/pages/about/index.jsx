import React from 'react'

//components
import App from 'components/app'
import AboutHero from 'pages/about/about-hero'
import AboutInfo from 'pages/about/about-info'
import LocationLinksContainer from 'pages/locations/location-links-container'
import LocationLinksItem from 'pages/locations/location-links-item'

//utility functions
import { renderItems } from 'utils/render-items'

//data
import { locationLinksData } from 'data/location-links-data'
import { aboutInfoData } from 'data/about-data'

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