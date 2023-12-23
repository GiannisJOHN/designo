import React from 'react'
import App from 'components/app'
import HomeHero from 'pages/home/home-hero'
import Features from 'pages/home/features'

//shared components
import Links from 'components/links'

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