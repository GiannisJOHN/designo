import React from 'react'
import './contact-hero.css'

function ContactHero() {

    const handleSubmit = (e) => {
        e.preventDefault()
      }

    return (
        <header className='container remove-padding'>
            <div className='contact-container'>
                <div>
                    <h1 className='title light-text'>Contuct Us</h1>
                    <p className='paragraph light-text contact-paragraph'>Ready to take it to the
                        next level? Let’s talk about your project or idea and find out how we can help
                        your business grow. If you are looking for unique digital experiences that’s
                        relatable to your users, drop us a line.</p>
                </div>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className="contact-input-container">
                        <input
                        className='contact-input'
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required/>
                    </div>
                    <div className="contact-input-container">
                        <input
                        className='contact-input'
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required/>
                    </div>
                    <div className="contact-input-container">
                        <input
                        className='contact-input'
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            required/>
                    </div>
                    <div className="contact-input-container">
                        <textarea
                        className='contact-textarea'
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            required/>
                    </div>
                    <button className="primary-btn btn-on-dark" type="submit">Submit</button>
                </form>
            </div>
        </header>
    )
}

export default ContactHero