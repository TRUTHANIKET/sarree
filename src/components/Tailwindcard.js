import React from 'react'
import TailwindCard from './minicomponents/TailwindCard'
export default function Tainwindcard() {
  return (
    <>
     <div className="min-h-screen  flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 space-y-4 md:space-y-0">
<TailwindCard img={"./images/acchu.png"} name={"Acchu Patola"} desc={"wallah habnhiashia"} url={"/acchupatola"}/>
<TailwindCard img={"./images/khambat.png"} name={"Khambat patola" } desc={"wallah habnhiashia"} url={"/khambatpatola"}/>


    </div>
  </div>
    </>
  )
}
