import React from 'react'

import './location-links-item.css'

function LocationLinksItem(props) {
    return (
        <div className='location-links-item-wrapper'>
           <img  className='location-links-item-img'src={props.data.img} alt="" />
           <h2 className='location-links-item-title'>{props.data.title}</h2>
           <button className='primary-btn btn-on-light'>SEE LOCATION</button>
        </div>
    )
}

export default LocationLinksItem