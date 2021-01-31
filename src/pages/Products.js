import React from 'react'
import Shell from '../components/global/Shell'
import ProductsSection from '../components/products/ProductsSection'
import RandomContainer from '../components/products/RandomContainer'

function Products() {
    return (
        <div>
            <Shell>
                <ProductsSection />
                <RandomContainer />
            </Shell>
        </div>
    )
}

export default Products
