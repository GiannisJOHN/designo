import React from 'react'
import LinkBox from '../link-box'

function Links() {
    return (
        <div className='container links-container'>
            <LinkBox name='web' />
            <LinkBox name='app' />
            <LinkBox name='graphic' />
        </div>
    )
}

export default Links