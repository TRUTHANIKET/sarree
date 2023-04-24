import React from 'react'
import {Link} from 'react-router-dom'
export default function ProductsforProduct(props) {
  return (
   <>
   <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      
      <div className="relative">
        <img className="w-full rounded-xl" src={props.image} alt="Colors" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{props.tag}</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex space-x-1 items-center">{props.name}</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          
          <p>{props.description}</p>
        </div>
        
        <Link to={"/allproducts"}><button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Check Out</button></Link>
      </div>
    </div></>
  )
}
