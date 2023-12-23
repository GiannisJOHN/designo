import React from 'react'
import App from 'components/app'
import LocationLinksContainer from 'pages/locations/location-links-container'
import LocationLinksItem from 'pages/locations/location-links-item'
import { renderItems } from 'utils/render-items'
import { locationLinksData } from 'data/location-links-data'
import ContactHero from 'pages/contact/contact-hero'


function Contact() {
    return (
        <App>
            <ContactHero />
            <LocationLinksContainer>
                {renderItems(locationLinksData, LocationLinksItem)}
            </LocationLinksContainer>
        </App>
    )
}

export default Contact