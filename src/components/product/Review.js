import React from 'react'
import LazyLoad from 'react-lazyload'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

function Review({ review }) {
    return (
        <div className="mt-4 mb-2">
            <div className="flex flex-row items-center">
                <div className="mr-4">
                    <LazyLoad height={36}>
                        <img className="w-12 h-12 rounded-full" src={review.review_avatar} alt={review.review_avatar}/> 
                    </LazyLoad>
                </div>
                <div className="flex-1">
                    <h1 className="text-base font-medium">{review.review_name}</h1>
                    <ReactStars 
                        value={review.review_rating}
                        edit={false}
                        filledIcon={<AiFillStar color="#FBBF24"/>}
                        emptyIcon={<AiOutlineStar color="#9CA3A"/>}
                    />
                </div>       
            </div>

            <div className="my-2 text-justify text-sm">
                {review.review_details}
            </div>
        </div>
    )
}

export default Review
