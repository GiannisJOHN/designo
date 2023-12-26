import React from 'react'

//components
import App from 'components/app'
import Links from 'components/links'
import HomeHero from 'pages/home/home-hero'
import Features from 'pages/home/features'

//css
import './home.css'

function Home() {
    return (
        <App>
            <HomeHero />
            <Links />
            <Features />
        </App>
    )
}

export default Home