import React from 'react'

function AboutInfo(props) {
    return (
        <div className='container section-space'>
            <div className="about-info-title-wrapper">
                <h1>{props.data.title}</h1>
                <p className="paragraph">{props.data.text}</p>
            </div>
            <div className="about-info-img-container">
                <img src={props.data.img} alt="" className="about-info-img" />
            </div>
        </div>
    )
}

export default AboutInfo