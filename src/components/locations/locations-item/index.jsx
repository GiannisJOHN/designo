import React from 'react'
import './locations-item.css'

function LocationItem(props) {
    
    return (
        <div className='locations-item'>
            <div className="locations-item-img-wrapper">
                <picture>
                    <source srcSet={props.data.imgDesktop} media="(min-width: 966px)"/>
                    <source srcSet={props.data.imgTablet} media="(min-width: 400px)"/>
                    <img src="" alt="" />
                </picture>
            </div>
            <div className="locations-item-title-wrapper">
                <h1 className='title locations-item-title'>{props.data.title}</h1>
                <div className="locations-item-info-wrapper">
                    <ul className='locations-item-list'>
                        <li><strong>{`Designo ${props.data.office} Office`}</strong></li>
                        <li>{props.data.street}</li>
                        <li>{props.data.city}</li>
                    </ul>
                    <ul className='locations-item-list'>
                        <li><strong>Contact</strong></li>
                        <li>P: {props.data.phone}</li>
                        <li>M: {props.data.mail}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocationItem