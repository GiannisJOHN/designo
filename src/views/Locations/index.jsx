import React from 'react'
import App from '../../components/app'
import LocationsContainer from '../../components/locations/locations-container'
import { renderItems } from '../../utils/render-items'
import LocationItem from '../../components/locations/locations-item'
import { locationsData } from '../../data/locations-data'

function Locations(props) {
    return (
        <App>
            <LocationsContainer>
                {renderItems(locationsData, LocationItem)}
            </LocationsContainer>
        </App>
    )
}

export default Locations