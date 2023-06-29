import React from 'react'
import App from '../App/App'
import HomeHero from '../../components/home/home-hero'
import Links from '../../components/home/links'

function Home() {
    return (
        <App>
            <HomeHero />
            <Links />
        </App>
    )
}

export default Home