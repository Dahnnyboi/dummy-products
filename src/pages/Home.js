import React from 'react';
import Showcase from '../components/home/Showcase';
import TopSales from '../components/home/TopSales';
import TopRated from '../components/home/TopRated';

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
