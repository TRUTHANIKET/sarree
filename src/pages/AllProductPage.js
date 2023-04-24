import React from 'react'
import {Link} from 'react-router-dom'
import ProductsforProduct from '../components/minicomponents/ProductsforProduct';
import asian from '../assets/asian.png'

export default function AllProductPage() {
    const Product=[
        {
            image:"https://i.ibb.co/QMdWfzX/component-image-one.png",
            name:"heyyo",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"saaree",
    },
    {
        image:"https://i.ibb.co/QMdWfzX/component-image-one.png",
        name:"heyyo",
        slug:"/allproducts/ProductDetails",
        desc:"aijghaoijghaog",
        tag:"saaree",
},
{
    image:"https://i.ibb.co/QMdWfzX/component-image-one.png",
    name:"heyyo",
    slug:"/allproducts/ProductDetails",
    desc:"aijghaoijghaog",
    tag:"saaree",
},
{
    image:"https://i.ibb.co/QMdWfzX/component-image-one.png",
    name:"heyyo",
    slug:"/allproducts/ProductDetails",
    desc:"aijghaoijghaog",
    tag:"saaree",
},
{
    image:"https://i.ibb.co/QMdWfzX/component-image-one.png",
    name:"heyyo",
    slug:"/allproducts/ProductDetails",
    desc:"aijghaoijghaog",
    tag:"saaree",
},
{
    image:"https://i.ibb.co/QMdWfzX/component-image-one.png",
    name:"heyyo",
    slug:"/allproducts/ProductDetails",
    desc:"aijghaoijghaog",
    tag:"saaree",
},

]

 
  return (    <>
<center>
<h1 className='my-2 py-3 text-gray-800 font-bold text-4xl center'>All Products</h1>
</center>
<br></br>
<hr/>


  <div className="min-h-screen rounded-xl flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    {Product.map(pr=><ProductsforProduct name={pr.name} image={pr.image} description={pr.desc} tag={pr.tag} /> )}
    
  </div>
</div>
</>
  )
}
