import React from 'react'

//components
import LinkBox from '../link-box'

//css
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