import React from 'react'
import Product from './Product'
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Autoplay]);

function Container({ loading, data, type }) {
    const breakPoint = {
        320: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        640: {
            slidesPerView: 4,
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
            autoplay={true}
            navigation
            breakpoints={breakPoint}
        >
            {
                data.map((d, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Product data={d} type={type} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Container
