import React from 'react'
import App from 'components/shared-components/app'
import AboutHero from 'components/About/about-hero'
import AboutInfo from 'components/About/about-info'
import { aboutInfoData } from 'data/about-data'
import { LocationLinksContainer, LocationLinksItem } from 'components/shared-components/location-links'
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