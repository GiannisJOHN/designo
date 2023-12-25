import React from 'react'
import HomeHero from 'pages/home/home-hero'
import Features from 'pages/home/features'

//shared components
import App from 'components/app'
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