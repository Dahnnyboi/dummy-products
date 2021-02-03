import React, { useState, useEffect } from 'react'
import { apiKeys } from '../../utils/keys';
import { productsInstance } from '../../utils/apis'

import LoadingProduct from './loading/LoadingProduct'
import Product from './Product'
import { Redirect } from 'react-router-dom';

function ProductContainer({ id }) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getProduct() {
            try {
                setLoading(true)
                const response = await productsInstance.get(`/${id}?apikey=${apiKeys}`)
                const data = await response.data

                console.log(data.data)
                setProduct(data.data)
                setLoading(false)
            } catch(e) {
                setError(true);  
            }
        }

        getProduct()
        
        return () => {

        }
    }, [id])

    return (
        <div className="w-full md:w-9/12 mb-4">
            { error && <Redirect to="/product_not_found"/>}
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
