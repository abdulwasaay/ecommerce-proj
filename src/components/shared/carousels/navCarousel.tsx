"use client"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box, useTheme } from "@mui/material";
import { Autoplay } from "swiper/modules";

const NavSlider = () => {
    const theme = useTheme();
    const data = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
    return (
        <Box py={1.5} sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.text.secondary }}>
            <Swiper
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="mySwiper font-bold">
                {
                    data?.map((d, ind) => (

                        <SwiperSlide key={ind} className="text-center px-10">
                            {d}
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </Box>
    )
}

export default NavSlider