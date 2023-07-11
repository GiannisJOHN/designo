import React from 'react'
import LinkBox from '../link-box'
import './links.css'

function Links() {
    return (
        <div className='container links-container section-space'>
            <LinkBox name='web' />
            <LinkBox name='app' />
            <LinkBox name='graphic' />
        </div>
    )
}

export default Links