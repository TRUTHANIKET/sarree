import React from 'react'
import '../utils/style.css'
import {Link} from 'react-router-dom'

import beach from  '../assets/beach.jpg'
import clothes from  '../assets/clothes.jpg'
import car from  '../assets/car.png'

export default function Banner() {
  return (
    <>
   <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
          <Link to="/all">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
            <div className="lg:flex md:flex block justify-between items-center">
              <div className="md:p-10 p-4">
                <p className="text-base leading-none text-gray-800">
                  
                </p>
                <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                 Checkout Our Collection
                </p>
                <p className="text-base leading-normal text-gray-600">
                  
                  
                  of Amazing and magnificient product
                </p>
              </div>
              <div className="md:p-10 p-4">
                <img
                  src="./images/sade.png"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div></Link>
        </div>
      </div>
    </>
  )
}
