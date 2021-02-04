import React, { useState, useEffect } from 'react'

import { apiKeys } from '../../utils/keys'
import { productsInstance } from '../../utils/apis'
import LoadingRelatedContainer from './loading/LoadingRelatedContainer'
import RelatedProduct from './RelatedProduct'

function RelatedContainer({ id }) {
    const [related, setRelated] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getRelated() {
            setLoading(true)
            const response = await productsInstance.get(`/${id}?apikey=${apiKeys}&similarities=true`)
            const data = response.data

            setRelated(data.data.product_similar)
            setLoading(false)
        } 

        getRelated()

        return () => {

        }
    }, [id])

    return (
        <div className="w-full md:w-9/12 mb-4">
            <h1 className="text-md font-bold">Also you may like</h1>
            {
                loading ?
                    <LoadingRelatedContainer />
                    :
                    <div className="flex flex-col md:flex-row md:flex-wrap">
                        {
                            related.map((rel, index) => {
                                return <RelatedProduct key={index} data={rel}/>
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default RelatedContainer
