import React from 'react'
import App from 'components/shared-components/app'
import HomeHero from 'components/Home/home-hero'
import Links from 'components/shared-components/links'
import Features from 'components/Home/features'

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