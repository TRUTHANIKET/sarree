import React from 'react'
import '../utils/product.css'
import car from '../assets/car.png'
import ProductsforProduct from './minicomponents/ProductsforProduct';



export default function Products() {

  const Product=[
    {   
        tag:"saaree",
        name:"saaree's",
        description:"weeeee",
        image:"./images/saree15.jpg"
    },
    {
        tag:"lengha",
        name:"lengha's",
        description:"iuaghoiuagoiaugiaughiau",
        image:"./images/lehanga2.jpg"
    },
    {
      tag:"all",
      name:"All Product's",
      description:"weeeee",
      image:"./images/saree12.jpg"
  }

]

  return (
    <>

<div className="min-h-screen rounded-xl bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4  md:space-y-0">
    {Product.map(pr=><ProductsforProduct name={pr.name} image={pr.image} description={pr.description} tag={pr.tag} /> )}
    
  </div>
</div>
    
    </>
  )
}
