import React from 'react'
import Product from './Product'
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Autoplay]);

function Container({ datas, type }) {
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

    const autoplay = {
        delay: type === "top rated" ? 5000 : 3000
    }

    return (
        <Swiper
            autoplay={autoplay}
            navigation
            breakpoints={breakPoint}
        >
            {
                datas.map((data, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Product data={data} type={type} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Container
