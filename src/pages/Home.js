import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import AllProduct from '../components/AllProduct'
import Products from '../components/Products'
import Tailwindcard from '../components/Tailwindcard'
import Modal from '../components/minicomponents/Modal'
import ImageScroll from '../components/ImageScroll'
import Carousel from './Carousel'

export default function Home() {
  return (
   <>
   <Navbar/>
 <div className='landing-product'>
 <div class="container text-center">
 <Banner/>
 <br></br>
 <h1 className='mt-4 text-gray-800 text-4xl font-bold'>Our collection's</h1>
 <br></br>
 <hr></hr>
 <br></br>
<Tailwindcard/>
 <br></br>
 <br></br>
 <h1 className='mt-4 text-gray-800 text-2xl font-bold'>All Products</h1>
 <br></br>
 <hr></hr>
 <br></br>

    <Products/>
    <Footer/>
    
 </div>
 </div>
    
  
    
   
   </>
  )
}
