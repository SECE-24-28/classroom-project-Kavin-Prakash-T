import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
 
    const [products,setProducts]=useState([])

     useEffect(()=>{
       const fetchData=async()=>{
           const response=await axios.get(`http://localhost:3000/products`)
           setProducts(response.data)
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
    </>
    
    )
}

export default ProductList;