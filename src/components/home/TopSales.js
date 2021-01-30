import React, { useEffect, useState } from 'react';
import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';
import Container from './container/Container';
import LoadingContainer from './container/LoadingContainer'

function TopSales() {
    const [loading, setLoading] = useState(false);
    const [topSales, setTopSales] = useState([]);

    useEffect(() => {
        async function fetchTopSales() {
            setLoading(true)
            const response = await productsInstance.get(`topsales?apikey=${apiKeys}`)
            const data = await response.data
            console.log(data)

            setTopSales([...data.data])
            setLoading(false)
        }

        fetchTopSales()
        
        return () => {

        }
    },[]);
    
    return (
        <div className="w-full bg-green-400 mt-8 py-4">
            <div className="w-11/12 mx-auto md:w-10/12 2xl:w-8/12 text-white">
                <h1 className="font-bold text-2xl">Top sales products</h1>
                <div className="my-4">
                    {
                        loading ? <LoadingContainer />
                            :
                            <Container 
                                loading={loading}
                                data={topSales}
                                type="top sales"
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default TopSales
