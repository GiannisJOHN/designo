import React from 'react'
import App from '../../components/app'
import HomeHero from '../../components/home/home-hero'
import Links from '../../components/links'
import Features from '../../components/features'

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