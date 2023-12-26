import React from 'react'

//components
import App from 'components/app'
import LocationLinksContainer from 'pages/locations/location-links-container'
import LocationLinksItem from 'pages/locations/location-links-item'
import ContactHero from 'pages/contact/contact-hero'

//utility function
import { renderItems } from 'utils/render-items'

//data
import { locationLinksData } from 'data/location-links-data'

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