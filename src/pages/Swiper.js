import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Navbar from "../components/Navbar";

export default function Acchu(props) {
    return (
        <>
        <Navbar/>
        <br/> <br/> <br/> <br/> <br/> <br/>

        <div className="px-4">
            <Swiper
                direction={"horizontal"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/2.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>




             
            </Swiper></div>
        </>
    );
}