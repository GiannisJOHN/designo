import React from 'react'
import './product-card.css'

function ProductCard(props) {
    return (
        <div className='product-card'>
            <div className="product-card-img-container">
                <img className='product-card-img' src={props.data.img} alt="" />
            </div>
            <div className="product-card-info-container">
                <h1 className='product-card-title'>{props.data.title}</h1>
                <p className='paragraph product-card-text'>{props.data.text}</p>
            </div>
        </div>
    )
}

export default ProductCard