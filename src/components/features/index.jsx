import React from 'react'
import featuresData from './features-data'
import FeaturesElement from './features-element'

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