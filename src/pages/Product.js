import React from 'react'
import { useParams } from "react-router-dom";
import loadable from '@loadable/component'
import Shell from '../components/global/Shell'

const ProductContainer = loadable(() => import('../components/product/ProductContainer')) 
const RelatedContainer = loadable(() => import('../components/product/RelatedContainer')) 

function Product() {
    let { id } = useParams();

    return (
        <div>
            <Shell>
                <ProductContainer id={id}/>
            </Shell>
            <div className="w-11/12 mx-auto md:w-10/12 2xl:w-8/12 flex flex-row">
                <RelatedContainer id={id}/>
            </div>
        </div>
    )
}

export default Product
