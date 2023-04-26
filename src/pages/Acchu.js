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

export default function Acchu(props) {

const acchu=[
{
  img:"./images/acchu/2.jpg"
}
,
{
  img:"./images/acchu/3.jpg"
}
,
{
  img:"./images/acchu/4.jpg"
}
,
{
  img:"./images/acchu/5.jpg"
}
,
{
  img:"./images/acchu/6.jpg"
}
,
{
  img:"./images/acchu/7.jpg"
}
,
{
  img:"./images/acchu/8.jpg"
}
,
{
  img:"./images/acchu/9.jpg"
}
,
{
  img:"./images/acchu/10.jpg"
}
,
{
  img:"./images/acchu/11.jpg"
}
,
{
  img:"./images/acchu/12.jpg"
}
,
{
  img:"./images/acchu/13.jpg"
}
,
{
  img:"./images/acchu/14.jpg"
}
,
{
  img:"./images/acchu/1.jpg"
}
,

]

    return (
        <>
        <Navbar/>
        <br/> <br/> <br/>
        <h1 className='mt-4 text-gray-800 text-center mb-4 text-4xl font-bold'>Acchu Patola</h1>

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
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/3.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/4.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/5.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/6.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/7.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/8.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/9.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/10.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/11.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/12.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/13.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/14.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="rounded-xl mb-5 mx-auto object-fill w-auto h-96"
                        src="./images/acchu/1.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                

</Swiper></div>
               
        </>
    );
}