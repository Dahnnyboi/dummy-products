import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

function Product({data, type}) {
    return (
        <div className="h-full">
            <Link to="/products">
                <div className={"c-card rounded bg-white " + (type === "top rated" ? "shadow-md hover:shadow-2xl" : "shadow-md hover:shadow-lg")}>
                    <LazyLoad height={150}>
                        <img className="w-full" src={data.product_image_sm} alt={data.product_image_sm} />
                    </LazyLoad>

                    <div className="h-32 text-black p-3 md:p-4">
                        <span className="w-auto py-1 px-2 bg-green-400 text-green-900 text-center uppercase text-xs font-bold rounded-full">{type}</span>
                        <div className="text-md font-bold my-1">{data.product_name}</div>
                        <div><span className="text-xs font-semibold">&#8369;</span><span className="text-base font-bold">{data.product_price}</span></div>
                    </div>
                    <div className="text-xs text-gray-700 p-3 md:p-4 border-t-2">
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
