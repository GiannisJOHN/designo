
import React from 'react'

function LinkBox(props) {
    return (
        <div className={`link-box link-box-${props.name}`}>
            <h1 className='link-box-title'>{props.name} DESIGN</h1>
            <h3 className='link-box-subtitle'>VIEW PROJECTS</h3>
        </div>
    )
}

export default LinkBox