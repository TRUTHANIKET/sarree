import React from 'react'
import TailwindCard from './minicomponents/TailwindCard'
export default function Tainwindcard() {
  return (
    <>
     <div className="min-h-screen  flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 space-y-4 md:space-y-0">
<TailwindCard name={"yaha pr patalo shatola likhna "} desc={"wallah habnhiashia"} url={"/special1"}/>
<TailwindCard name={"yaha pr patalo shatola ka bhai likhna " } desc={"wallah habnhiashia"} url={"/special2"}/>


    </div>
  </div>
    </>
  )
}
