import { useState } from "react";

const ProductForm = ({products,setProducts}) => {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [sp, setSp] = useState("")
    const [op, setOp] = useState("")
    const [cat, setCat] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleUrl = (e) => {
 setUrl(e.target.value)
    }
    const handleSp = (e) => {
 setSp(e.target.value)
    }
    const handleOp = (e) => {
 setOp(e.target.value)
    }
    const handleCat = (e) => {
         setCat(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const oldProducts=[...products]
        oldProducts.push({id:products.length+1,name,url,sp,op,cat})
        setProducts(oldProducts);
        console.log(products)
    }

    return (
        <form className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto p-5 bg-pink-200 shadow-lg rounded-xl">
            <h1 className="font-bold text-2xl mb-5">Add Products</h1>
            <div className="flex flex-col justify-center items-start">
                <label htmlFor="name">Name:</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="name" value={name} onChange={handleName}/><br />
                <label htmlFor="url">Image URL:</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="url" value={url} onChange={handleUrl}/><br />
                <label htmlFor="sp">Selling Price</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="sp" value={sp} onChange={handleSp}/><br />
                <label htmlFor="op">Original Price</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="op" value={op} onChange={handleOp}/><br />
                <label htmlFor="category">Category</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="category" value={cat} onChange={handleCat}/><br />
            </div>
            <button className="bg-blue-600 text-white text-lg px-3 py-1 rounded-lg" type="submit" onClick={handleSubmit} >Submit</button>
        </form>
    )
}

export default ProductForm;