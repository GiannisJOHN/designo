import React from 'react'

function ProductCard(props) {
    return (
        <div>
            <img src={props.data.img} alt="" />
            <div className="product-card-info-container">
                <h1>{props.data.title}</h1>
                <p>{props.data.text}</p>
            </div>
        </div>
    )
}

export default ProductCard