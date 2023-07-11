import React from 'react'
import featuresData from '../../../data/features-data.js'
import FeaturesElement from './features-element.jsx'
import './features.css'

function Features() {

    function renderFeatureElements(data) {
        return data.map((each) => {
            return <FeaturesElement data={each} />
        })
    }

    return (
        <section className='container features-container section-space'>
            {renderFeatureElements(featuresData)}
        </section>
    )
}

export default Features