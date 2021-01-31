import React, { useEffect, useState } from 'react'
import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';
import LoadingRandomContainer from './loading/LoadingRandomContainer';
import RandomProduct from './RandomProduct';

function RandomContainer() {
    const [randProducts, setRandProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        async function fetchRandomProducts() {
            setLoading(true)
            const response = await productsInstance.get(`random?apikey=${apiKeys}&limit=5`)
            const data = await response.data

            setRandProducts([...data.data])
            setLoading(false)
        }

        fetchRandomProducts()

        return () => {

        }
    }, [])

    return (
        <div className="hidden lg:block w-0 lg:w-1/3 m-4">
            <div className="sticky top-24">
                <h1 className="text-md text-green-800 font-medium">Random products</h1>

                {
                    loading ?
                        <LoadingRandomContainer />
                        :
                        randProducts.map((rand, index) => {
                            return <RandomProduct key={index} data={rand} />
                        })
                }
            </div>
        </div>
    )
}

export default RandomContainer
