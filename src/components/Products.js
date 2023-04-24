import React from 'react'
import '../utils/product.css'
import car from '../assets/car.png'
import ProductsforProduct from './minicomponents/ProductsforProduct';



export default function Products() {

  const Product=[
    {   
        tag:"saaree",
        name:"ulta ssadi",
        description:"weeeee",
        image:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        tag:"lengha",
        name:"ulta lengh",
        description:"iuaghoiuagoiaugiaughiau",
        image:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      tag:"datrtebayo",
      name:"ulta lengh",
      description:"weeeee",
      image:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }

]

  return (
    <>

<div className="min-h-screen rounded-xl bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    {Product.map(pr=><ProductsforProduct name={pr.name} image={pr.image} description={pr.description} tag={pr.tag} /> )}
    
  </div>
</div>
    
    </>
  )
}
