import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
    const API_URL = import.meta.env.VITE_API_BASE_URL;
 
    const [products,setProducts]=useState([])

     useEffect(()=>{
       const fetchData=async()=>{
           const response=await axios.get(`${API_URL}/products`)
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