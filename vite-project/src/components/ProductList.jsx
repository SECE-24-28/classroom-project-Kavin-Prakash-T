import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const ProductList = () => {
 
    const [products,setProducts]=useState([])

     useEffect(()=>{
       const fetchData=async()=>{
           const response=await fetch(`http://localhost:3000/products`)
           const data=await response.json();
           console.log(data)
           setProducts(data)
       }
       fetchData()
    },[])

    return (

        <>
        <div className="bg-yellow-100 flex justify-between flex-wrap">
        {products.map((product,index)=>
                <ProductCard key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>
            
        )}
        </div>
    <ProductForm products={products} setProducts={setProducts}/>
    </>
    
    )
}

export default ProductList;