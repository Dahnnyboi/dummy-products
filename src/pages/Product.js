import React from 'react'
import Shell from '../components/global/Shell'
import ProductContainer from '../components/product/ProductContainer'
import RelatedContainer from '../components/product/RelatedContainer'
import { useParams } from "react-router-dom";

function Product() {
    let { id } = useParams();

    return (
        <div>
            <Shell>
                <ProductContainer id={id}/>
            </Shell>
            <Shell>
                <RelatedContainer />
            </Shell>
        </div>
    )
}

export default Product
