import React from 'react'
import './call-to-action.css'
import { Link } from "react-router-dom"

function CallToAction() {
    return (
        <div className='container call-to-action-drop'>
            <div className="call-to-action-container">
                <div className='call-to-action-title-wrapper'>
                    <h1 className='light-text call-to-action-title'>Let’s talk about your project</h1>
                    <p className='paragraph light-text call-to-action-paragraph'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>        
                </div>
                <button className="primary-btn btn-on-dark">
                    <Link to='/contact' className='btn-link'>GET IN TOUCH</Link>
                </button>
            </div>
        </div>
    )
}

export default CallToAction