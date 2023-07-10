import { Link } from "react-router-dom";
import './link-box.css'

import React from 'react'

function LinkBox(props) {
    return (
        <div className={`link-box link-box-${props.name}`}>
            <Link to={`/${props.name}design`} className="link-box-a">
                <h1 className='link-box-title'>{props.name} DESIGN</h1>
                <h3 className='link-box-subtitle'>VIEW PROJECTS</h3>
            </Link>
        </div>
    )
}

export default LinkBox