import React from 'react'
import { Link } from "react-router-dom"

import './location-links-item.css'

function LocationLinksItem(props) {
    return (
        <div className='location-links-item-wrapper'>
           <img  className='location-links-item-img'src={props.data.img} alt="" />
           <h2 className='location-links-item-title'>{props.data.title}</h2>
           <button className='primary-btn btn-on-light'>
            <Link to='/locations' className='btn-link'>SEE LOCATION</Link>
           </button>
        </div>
    )
}

export default LocationLinksItem