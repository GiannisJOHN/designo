import React from 'react'

//css
import './location-links-container.css'

function LocationLinksContainer(props) {
    return (
        <section className='container section-space'>
            <div className='location-links-container'>
                {props.children}
            </div>
        </section>
    )
}

export default LocationLinksContainer