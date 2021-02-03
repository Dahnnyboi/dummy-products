import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

function RelatedProducts({data}) {
    return (
        <div className="width-container m-2">
            <Link 
                to={`/products/${data._id}`}
                target="_blank"
                rel='noopener noreferrer'
                >
                <div className="c-card bg-white rounded shadow-md hover:shadow-lg">
                    <LazyLoad height={150}>
                        <img className="w-full" src={data.product_image_md} alt={data.product_image_md} />
                    </LazyLoad>

                    <div className="h-40 md:h-24 text-black p-3 md:p-4">
                        <div className="text-md font-bold my-1">{data.product_name}</div>
                        <div><span className="text-xs font-semibold">&#8369;</span><span className="text-base font-bold">{data.product_price}</span></div>
                    </div>
                    <div className="text-xs text-gray-700 p-3 md:p-4 border-t-2">
                        <ReactStars 
                            value={data.product_ratings}
                            edit={false}
                            filledIcon={<AiFillStar color="#FBBF24"/>}
                            emptyIcon={<AiOutlineStar color="#9CA3A"/>}
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RelatedProducts
