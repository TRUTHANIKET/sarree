import Footer from '../components/Footer';
import ProductsforProduct from '../components/minicomponents/ProductsforProduct';
import Navbar from '../components/Navbar'
export default function All() {
    const Product=[
        {
            image:"./images/saree1.jpg",
            name:"Banarasi kanjivaram",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree2.jpg",
            name:"Patola border saree",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
      
        {
            image:"./images/lehanga1.jpg",
            name:"Kadiyal paithani lehanga",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga2.jpg",
            name:"Kadiyal paithani lehanga",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga3.jpg",
            name:"Kadiyal paithani lehanga",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga4.jpg",
            name:"Patola lehanga",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga5.jpg",
            name:"Kalamkari x bandhani dupatta   lehanga",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/saree3.jpg",
            name:"Khaddi Georgette saree",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree4.jpg",
            name:"Patola border saree",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree5.jpg",
            name:"Khaddi georgette gharchola bandhani",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree6.jpg",
            name:"Khaddi georgette baghban",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree7.jpg",
            name:"Khaddi georgette lehariya bandhani brush",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree8.jpg",
            name:"Lotus paithani",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree9.jpg",
            name:"Kanjivaram with dharmavaram fusion",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree10.jpg",
            name:"Khaddh georgette silver golden butti",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree11.jpg",
            name:"Khaddi georgette silver golden bsndhani brush",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree12.jpg",
            name:"Kanjivaram rangkaat",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree13.jpg",
            name:"Khaddi georgette butti",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree14.jpg",
            name:"Dharmavaram patola x kanjivaram border",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree15.jpg",
            name:"Khaddi georgette bandhani brush saree",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree16.jpg",
            name:"Lotus paithani saree",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree17.jpg",
            name:"Banarasi kanjivaram",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/saree18.jpg",
            name:"Khaddi georgette silver zari",
           
            desc:"aijghaoijghaog",
            tag:"saaree",
        },
        {
            image:"./images/lehanga6.jpg",
            name:"Crush patola lehangas",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        {
            image:"./images/lehanga7.jpg",
            name:"Patola lehanga",
           
            desc:"aijghaoijghaog",
            tag:"lehanga",
        },
        
        

]

 
  return (    <>
<center>
    <Navbar/>
<h1 className='my-2 py-3 text-gray-800 font-bold text-4xl center'>All Products</h1>
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
