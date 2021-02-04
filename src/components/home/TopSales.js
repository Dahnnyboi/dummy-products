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

            setTopSales([...data.data])
            setLoading(false)
        }

        fetchTopSales()
        
        return () => {

        }
    },[]);
    
    return (
        <div className="w-full bg-green-400 mt-8 py-4">
            <div className="w-11/12 md:w-10/12 2xl:w-8/12 text-white mx-auto">
                <h1 className="text-2xl font-bold ">Top sales products</h1>
                <div className="my-4">
                    {
                        loading ? <LoadingContainer />
                            :
                            <Container 
                                datas={topSales}
                                type="top sales"
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default TopSales
