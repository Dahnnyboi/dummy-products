import React from 'react'
import loadable from '@loadable/component'

const Showcase = loadable(() => import('../components/home/Showcase')) 
const TopSales = loadable(() => import('../components/home/TopSales')) 
const TopRated = loadable(() => import('../components/home/TopRated'))

function Home() {
    return (
        <div>
            <Showcase />
            <TopSales />
            <TopRated />
        </div>
    )
}

export default Home
