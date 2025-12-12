import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ProductForm = () => {

    const navigate=useNavigate("")

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleImage = (e) => {
 setImage(e.target.value)
    }
    const handlePrice = (e) => {
 setPrice(e.target.value)
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response=await axios.post("http://localhost:3000/products",{
            name:name,
            image:image,
            price:price
        })
        toast.success(response)
        navigate("/")
    }

    return (
        <form className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto p-5 bg-pink-200 shadow-lg rounded-xl">
            <h1 className="font-bold text-2xl mb-5">Add Products</h1>
            <div className="flex flex-col justify-center items-start">
                <label htmlFor="name">Name:</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="name" value={name} onChange={handleName}/><br />
                <label htmlFor="url">Image URL:</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="url" value={image} onChange={handleImage}/><br />
                <label htmlFor="sp">Price:</label><br />
                <input className="border p-2 rounded-sm w-[275px]" type="text" id="sp" value={price} onChange={handlePrice}/><br />
            </div>
            <button className="bg-blue-600 text-white text-lg px-3 py-1 rounded-lg" type="submit" onClick={handleSubmit} >Submit</button>
        </form>
    )
}

export default ProductForm;