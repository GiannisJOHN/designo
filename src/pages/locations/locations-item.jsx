import React from 'react'
import './locations-item.css'

function LocationItem(props) {
    let order = ['flex-order-1', 'flex-order-2']

    if (props.data.orderReverse === true) {
        order.reverse()
    }

    return (
        <div className='locations-item'>
            <div className={`locations-item-img-wrapper ${order[0]}`}>
                <picture>
                    <source srcSet={props.data.imgDesktop} media="(min-width: 895px)"/>
                    <source srcSet={props.data.imgTablet} media="(min-width: 0)"/>
                    <img className='locations-item-img' src="" alt="" />
                </picture>
            </div>
            <div className={`locations-item-title-wrapper ${order[1]}`}>
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