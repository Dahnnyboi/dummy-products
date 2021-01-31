import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

function Product({data}) {
    return (
        <div className="m-2 width-container">
            <Link to="/products">
                <div className="c-card rounded shadow-md hover:shadow-lg bg-white">
                    <LazyLoad height={150}>
                        <img className="w-full" src={data.product_image_md} alt={data.product_image_md} />
                    </LazyLoad>

                    <div className="p-3 md:p-4 text-black h-28">
                        <div className="font-bold text-md my-1">{data.product_name}</div>
                        <div><span className="text-xs font-semibold">&#8369;</span><span className="text-base font-bold">{data.product_price}</span></div>
                    </div>
                    <div className="p-3 md:p-4 border-t-2 text-xs text-gray-700">
                        <ReactStars 
                            value={data.product_ratings}
                            edit={false}
                            filledIcon={<AiFillStar color="#FBBF24"/>}
                            emptyIcon={<AiOutlineStar color="#9CA3A"/>}
                        /><span>{data.product_sales} sales</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product
