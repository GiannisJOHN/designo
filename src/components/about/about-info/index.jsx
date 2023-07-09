import React from 'react'

function AboutInfo(props) {

    let order = ['about-order-1', 'about-order-2']

    if (props.reverse === true) {
        order.reverse()
    }
    
    return (
        <div className={`container section-space remove-padding ${props.select}`}>
            <div className='about-info-container'>
                <div className={`about-info-img-container ${order[1]}`}>
                    <picture>
                        <source  srcSet={props.data.imgDesktop} media="(min-width: 966px)" type="image/jpg"/>
                        <source  srcSet={props.data.imgTablet} media="(min-width: 600px)" type="image/jpg"/>
                        <source  srcSet={props.data.imgMobile} media="(min-width: 0)" type="image/jpg"/>
                        <img className='about-info-img' src="" alt="" />
                    </picture>
                </div>
                <div className={`about-info-title-wrapper ${order[0]}`}>
                    <h1 className='title about-info-title'>{props.data.title}</h1>
                    <p className="paragraph about-info-text">{props.data.text}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo