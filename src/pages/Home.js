import React from 'react';
import Showcase from '../components/home/Showcase';
import TopRated from '../components/home/TopRated';
import TopSales from '../components/home/TopSales';

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
