import React, { useState }from 'react'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";
import Review from './Review';

function Product({ data }) {
    const [showReviews, setShowReviews] = useState(false)

    const showMoreReviews = () => {
        setShowReviews(!showReviews)
    }

    return (
        <div className="w-full">
            <LazyLoad height={600}>
                <img className="block w-full md:w-1/2 mx-auto" src={data.product_image_lg} alt={data.product_image_lg} />
            </LazyLoad>
            <div className="text-black p-3 md:p-4 ">
                <h1 className="text-xl font-bold my-1">{data.product_name}</h1>
                <div><span className="text-xs text-gray-600 font-semibold">&#8369;</span><span className="text-base font-bold">{data.product_price}</span></div>
                <div className="text-base">{data.product_description}</div>
                <div className="my-2">
                    <ReactStars 
                        value={data.product_ratings}
                        edit={false}
                        filledIcon={<AiFillStar color="#FBBF24"/>}
                        emptyIcon={<AiOutlineStar color="#9CA3A"/>}
                    /><span>{data.product_sales} sales</span>
                </div>
                <button className="bg-green-300 text-green-800 font-medium py-1 px-3 rounded">Buy now!</button>

                <div className="border-t-2 border-gray-200 mt-2">
                    <h1 className="text-md font-medium mt-4">Reviews</h1>
                    <Review review={data.product_reviews[0]} />
                    {   
                        showReviews ?
                            data.product_reviews.map((review, index) => {
                                if(index === 0){
                                    return <div></div>
                                } else {
                                    return <Review key={index} review={review}/>
                                }
                            })
                            :
                            <div></div>
                    }
                    <button className="bg-green-300 text-green-800 font-medium py-1 px-3 rounded" onClick={() => {showMoreReviews()}}>{ showReviews ? "Hide reviews" : "Show more"}</button>
                </div>
            </div>
        </div>
    )
}

export default Product
