import React from 'react'

function FeaturesElement(props) {
    return (
        <div>
            <img className="feature-img" src={props.data.image} alt="" />
            <div className="feature-title-wrapper">
                <h3>{props.data.title}</h3>
                <p className="paragraph">{props.data.text}</p>
            </div>
        </div>
    )
}

export default FeaturesElement