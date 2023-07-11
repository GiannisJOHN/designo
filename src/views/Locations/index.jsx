import React from 'react'
import App from 'components/shared-components/app'
import LocationsContainer from 'components/Locations/locations-container'
import { renderItems } from 'utils/render-items'
import LocationItem from 'components/Locations/locations-item'
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