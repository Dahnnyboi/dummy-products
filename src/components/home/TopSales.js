import React, { useEffect, useState } from 'react';
import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';

function TopSales() {
    const [loading, setLoading] = useState(false);
    const [topSales, setTopSales] = useState([]);

    useEffect(() => {
        async function fetchTopRated() {
            setLoading(true)
            const response = await productsInstance.get(`topsales?apikey=${apiKeys}`)
            const data = await response.data
            console.log(data)

            setTopSales([...data.data])
            setLoading(false)
        }

        fetchTopRated()
        
        return () => {

        }
    },[]);
    
    return (
        <div className="w-screen bg-green-800 mt-8">
            <div className="w-11/12 mx-auto md:w-10/12 2xl:w-8/12 text-white">
                <h1 className="font-bold text-2xl">Top sales product</h1>
                {
                    loading ? <p>Loading...</p> : console.log(topSales)
                }
            </div>
        </div>
    )
}

export default TopSales
