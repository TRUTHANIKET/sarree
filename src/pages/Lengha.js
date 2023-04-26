import Footer from '../components/Footer';
import ProductsforProduct from '../components/minicomponents/ProductsforProduct';
import Navbar from '../components/Navbar'
export default function Lengha() {
    const Product=[

        {
            image:"./images/lehanga1.jpg",
            name:"Kadiyal paithani lehanga",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga2.jpg",
            name:"Kadiyal paithani lehanga",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga3.jpg",
            name:"Kadiyal paithani lehanga",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga4.jpg",
            name:"Patola lehanga",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga5.jpg",
            name:"Kalamkari x bandhani dupatta   lehanga",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga6.jpg",
            name:"Crush patola lehangas",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga7.jpg",
            name:"Patola lehanga",
            slug:"/allproducts/ProductDetails",
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        
        

]

 
  return (    <>
   <Navbar/>
<center>
<h1 className='my-2 py-3 text-gray-800 font-bold text-4xl center'>All Products</h1>
</center>
<br></br>
<hr/>


  <div className="min-h-screen rounded-xl flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    {Product.map(pr=><ProductsforProduct name={pr.name} image={pr.image} desc={pr.desc} tag={pr.tag} /> )}
    
  </div>
</div>
<Footer/>
</>
  )
}
