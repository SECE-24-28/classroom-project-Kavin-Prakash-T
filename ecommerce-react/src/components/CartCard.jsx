import { useState } from "react"

const CartCard = ({cartItems,setCartItems,id, name, quantity, price, url }) => {


    return (
        <div className="w-full h-[200px]  bg-slate-800 border-gray-400 border rounded-xl m-10 flex flex-row gap-10 items-center">
            <img src={url} alt={name} className="w-[250px] h-[200px]" />
            <div className="">
                <h1 className="font-bold text-2xl text-white">{name}</h1>
                <h3 className="font-semibold text-xl text-white mt-5">${price}</h3>
                <div className="flex gap-10 text-white mt-5 items-center">
                    <h1 className="font-semibold text-xl text-gray-300">Quantity</h1>
                    <button  className="border-gray-400 rounded-sm border px-4 py-1 bg-red-600 font-bold text-xl">-</button>
                    <h1 className="font-bold border rounded-sm border-gray-400 px-4 bg-slate-700 py-2">{quantity}</h1>
                    <button  className="border-gray-400 rounded-sm border px-4 py-1 bg-green-600 font-bold text-xl">+</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;