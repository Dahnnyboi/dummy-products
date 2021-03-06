import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import LoadingProduct from './LoadingProduct'

function LoadingContainer() {
    const elements = [1, 2, 3, 4, 5, 6]
    const breakPoint = {
        320: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        1536: {
            slidesPerView: 6,
            spaceBetween: 18
        }
    }

    return (
        <Swiper
            breakpoints={breakPoint}
        >
            {
                elements.map((e, i) => {
                    return(
                        <SwiperSlide key={i}>
                            <LoadingProduct />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default LoadingContainer
