import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const ProductList = () => {
 
    const [products,setProducts]=useState([
        {
            id: 1,
            name: "Product 1",
            price: 100,
            image: "https://picsum.photos/id/7/300/300"
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            image: "https://picsum.photos/id/74/300/300"
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            image: "https://picsum.photos/id/15/300/300"
        }
    ]
)

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