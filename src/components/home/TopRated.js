import React, { useEffect, useState } from 'react';
import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';
import Container from './container/Container';
import LoadingContainer from './container/LoadingContainer'

function TopRated() {
    const [loading, setLoading] = useState(false);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        async function fetchTopRated() {
            setLoading(true)
            const response = await productsInstance.get(`toprated?apikey=${apiKeys}`)
            const data = await response.data
            console.log(data)

            setTopRated([...data.data])
            setLoading(false)
        }

        fetchTopRated()
        
        return () => {

        }
    },[]);

    return (
        <div className="w-full bg-white-400 mt-4 py-4">
            <div className="w-11/12 md:w-10/12 2xl:w-8/12 text-green-800 mx-auto">
                <h1 className="text-2xl font-bold">Top rated products</h1>
                <div className="my-4">
                    {
                        loading ? <LoadingContainer />
                            :
                            <Container 
                                datas={topRated}
                                type="top rated"
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default TopRated;
