import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

function Product({data, type}) {
    return (
        <div className="h-full">
            <Link to="/products">
                <div className={"c-card rounded" + (type === "top rated" ? "shadow-md hover:shadow-2xl" : "shadow-md hover:shadow-lg bg-white")}>
                    <LazyLoad height={150}>
                        <img className="w-full" src={data.product_image_sm} alt={data.product_image_sm} />
                    </LazyLoad>

                    <div className="p-3 md:p-4 text-black">
                        <span className="py-1 px-3 bg-green-400 rounded-full text-center text-green-900 font-bold uppercase text-xs w-auto">{type}</span>
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
