import React from 'react'
import Product from './Product'

function ProductsContainer({data}) {
    return (
        <div className="w-full flex flex-col md:flex-row md:flex-wrap">
            {
                data.map((d, index) => {
                    return <Product key={index} data={d}/>
                })
            }        
        </div>
    )
}

export default ProductsContainer
