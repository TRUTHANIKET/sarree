import React from "react";
// Import Swiper React components
import Swipe from "./Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Khambat(props) {



    return (
        <>
        <Navbar/>
        <br/> <br/> <br/> 
      
       <h1 className='mt-4 text-gray-800 text-center mb-4 text-4xl font-bold'>Khambat Patola</h1>
      

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
                        src="./images/khambat/2.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/khambat/3.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/khambat/4.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/khambat/5.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/khambat/6.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/khambat/7.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/khambat/8.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
               

</Swiper></div>
<Footer/>
        </>
    );
}