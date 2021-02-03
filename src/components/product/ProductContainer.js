import React, { useState, useEffect } from 'react'
import { apiKeys } from '../../utils/keys';
import { productsInstance } from '../../utils/apis'

import LoadingProduct from './loading/LoadingProduct'
import Product from './Product'

function ProductContainer({ id }) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState({})

    useEffect(() => {
        async function getProduct() {
            setLoading(true)
            const response = await productsInstance.get(`/${id}?apikey=${apiKeys}`)
            const data = await response.data

            console.log(data.data)
            setProduct(data.data)
            setLoading(false)
        }

        getProduct()
        
        return () => {

        }
    }, [id])

    return (
        <div className="w-full md:w-9/12 mb-4">
            {
                loading ? 
                    <LoadingProduct />
                    :
                    <Product data={product}/>
            }
        </div>
    )
}

export default ProductContainer
