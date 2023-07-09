import React from 'react'



import './locations-container.css'

function LocationsContainer(props) {
    return (
        <section className='container remove-padding'>
            <div className='locations-container'>
                {props.children}
            </div>
        </section>
    )
}

export default LocationsContainer