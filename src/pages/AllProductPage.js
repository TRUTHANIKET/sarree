import React from 'react'
import {Link} from 'react-router-dom'
import ProductsforProduct from '../components/minicomponents/ProductsforProduct';
import asian from '../assets/asian.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';



export default function AllProductPage() {
    const Product=[
      {
        image:"./images/saree1.jpg",
        name:"Banarasi kanjivaram",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree2.jpg",
        name:"Patola border saree",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree3.jpg",
        name:"Khaddi Georgette saree",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree4.jpg",
        name:"Patola border saree",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree5.jpg",
        name:"Khaddi georgette gharchola bandhani",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree6.jpg",
        name:"Khaddi georgette baghban",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree7.jpg",
        name:"Khaddi georgette lehariya bandhani brush",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree8.jpg",
        name:"Lotus paithani",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree9.jpg",
        name:"Kanjivaram with dharmavaram fusion",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree10.jpg",
        name:"Khaddh georgette silver golden butti",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree11.jpg",
        name:"Khaddi georgette silver golden bsndhani brush",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree12.jpg",
        name:"Kanjivaram rangkaat",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree13.jpg",
        name:"Khaddi georgette butti",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree14.jpg",
        name:"Dharmavaram patola x kanjivaram border",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree15.jpg",
        name:"Khaddi georgette bandhani brush saree",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree16.jpg",
        name:"Lotus paithani saree",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree17.jpg",
        name:"Banarasi kanjivaram",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },
    {
        image:"./images/saree18.jpg",
        name:"Khaddi georgette silver zari",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
    },

]

 
  return (    <>
   <Navbar/>
<center>
<h1 className='my-2 py-3 text-gray-800 font-bold text-4xl center'>All Saaree's</h1>
</center>



  <div className="min-h-screen rounded-xl flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    {Product.map(pr=><ProductsforProduct name={pr.name} image={pr.image} desc={pr.desc} tag={pr.tag} /> )}
    
  </div>
</div>
<Footer/>
</>
  )
}

