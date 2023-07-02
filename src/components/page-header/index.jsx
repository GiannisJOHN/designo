import React from 'react';

function  PageHeader(props) {
    return (
        <header className='container remove-padding'>
            <div className="page-header-container">
                <h1 className='title light-text'>{props.title}</h1>
                <p className="paragraph light-text page-header-paragraph">{props.text}</p>
            </div>
        </header>
    )
}

export default  PageHeader