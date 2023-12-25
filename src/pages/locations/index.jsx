import React from 'react'

//components
import App from 'components/app'
import LocationsContainer from 'pages/locations/locations-container'
import LocationItem from 'pages/locations/locations-item'

//utility function
import { renderItems } from 'utils/render-items'

//data
import { locationsData } from 'data/locations-data'

function Locations() {
    return (
        <App>
            <LocationsContainer>
                {renderItems(locationsData, LocationItem)}
            </LocationsContainer>
        </App>
    )
}

export default Locations