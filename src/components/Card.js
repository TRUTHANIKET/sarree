import React from 'react'
import '../utils/style.css';
import woman from'../assets/woman.jpg'
export default function Card() {
  return (
   <>
   <div className='wrapper'>
   <div className='main'>
   <div className=" container">
        <div className='product-image'>
        <img src={woman}></img>
        </div>
        <div className='content'>
            <h4><b>This is a shirt</b></h4>
            <p>okay writing osmething about the product page</p>
        </div>
        <div className='Tag'>
            <p>shirt</p>
        </div>
   </div></div></div>
   </>
  )
}
