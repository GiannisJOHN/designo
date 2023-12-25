import React from 'react'

//components
import FeaturesElement from './features-element.jsx'

//utility function
import { renderItems } from 'utils/render-items.js'

//css
import './features.css'

//data
import featuresData from '../../data/features-data.js'


function Features() {

    return (
        <section className='container features-container section-space'>
            {renderItems(featuresData, FeaturesElement)}
        </section>
    )
}

export default Features