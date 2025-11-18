"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./carousels.css"
import { Box } from "@mui/material";

// Example slider data
const slides = [
    {
        id: 1,
        img: "/images/lp-slider/slide1.jpg",
    },
    {
        id: 2,
        img: "/images/lp-slider/slide2.jpg",
    },
    {
        id: 3,
        img: "/images/lp-slider/slide3.jpg",
    },
];

const BannerSlider = () => {
    return (
        <Box className="w-full max-w-7xl mx-auto py-4 px-5">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                loop
                className="rounded-2xl shadow-lg overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img
                            src={slide.img}
                            alt="Premium Sunglasses Banner"
                            className="w-full h-[480px] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}


export default BannerSlider