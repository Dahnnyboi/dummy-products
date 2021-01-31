import React from 'react'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

function RandomProduct({ data }) {
    return (
        <div className="w-full h-24 grid grid-cols-3 grid-rows-2 gap-2 m-4 2xl:m-6">
            <div className="col-span-1 row-span-2">
                <LazyLoad>
                    <img src={data.product_image_sm} alt={data.product_image_sm} />
                </LazyLoad>
            </div>
            <div className="col-span-2 row-span-2">
                <h1 className="text-md font-medium">{data.product_name}</h1>
                <p><span className="text-xs font-semibold">&#8369;</span><span className="text-base font-bold">{data.product_price}</span></p>

                <ReactStars 
                    value={data.product_ratings}
                    edit={false}
                    filledIcon={<AiFillStar color="#FBBF24"/>}
                    emptyIcon={<AiOutlineStar color="#9CA3A"/>}
                /><span>{data.product_sales} of sales</span>
            </div>
        </div>
    )
}

export default RandomProduct
