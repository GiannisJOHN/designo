import React from 'react'

//css
import './about-info.css'

function AboutInfo(props) {

    let order = ['flex-order-1', 'flex-order-2']

    if (props.reverse === true) {
        order.reverse()
    }
    
    return (
        <div className={`container section-space remove-padding ${props.select}`}>
            <div className='about-info-container'>
                <div className={`about-info-img-container ${order[0]}`}>
                    <picture>
                        <source  srcSet={props.data.imgDesktop} media="(min-width: 966px)" type="image/jpg"/>
                        <source  srcSet={props.data.imgTablet} media="(min-width: 600px)" type="image/jpg"/>
                        <source  srcSet={props.data.imgMobile} media="(min-width: 0)" type="image/jpg"/>
                        <img className='about-info-img' src="" alt="" />
                    </picture>
                </div>
                <div className={`about-info-title-wrapper ${order[1]}`}>
                    <h1 className='title about-info-title'>{props.data.title}</h1>
                    <p className="paragraph about-info-text">{props.data.text}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo