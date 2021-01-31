import React from 'react'
import Product from './Product'

function ProductsContainer({datas}) {
    return (
        <div className="w-full flex flex-col md:flex-row md:flex-wrap">
            {
                datas.map((data, index) => {
                    return <Product key={index} data={data}/>
                })
            }        
        </div>
    )
}

export default ProductsContainer
