import React from 'react'
import loadable from '@loadable/component'
import Shell from '../components/global/Shell'

const ProductsSection = loadable(() => import( '../components/products/ProductsSection'))
const RandomContainer = loadable(() => import('../components/products/RandomContainer'))

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
