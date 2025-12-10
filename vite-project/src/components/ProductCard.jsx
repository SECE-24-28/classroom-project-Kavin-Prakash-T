import { Link } from "react-router";

const ProductCard=(props)=>{
    const {name,price,image,id}=props
    return(
        <Link to={`/products/${id}`}>
        <div className="p-20">
        <div className="w-[300px] text-black bg-pink-300 border-gray-400 border rounded-xl">
            <img src={image} alt={name} />
            <div className="p-5">
                <h1 className="font-bold text-2xl ">{name}</h1>
                <div className="text-black flex justify-between items-center mt-3">
                    <h3 className="font-semibold text-3xl">${price}</h3>
                    <button className=" text-white text-lg bg-blue-600 px-2 py-1 rounded-lg">Add To Cart +</button>
                </div>
            </div>
        </div>
    </div>
    </Link>
    )
}

export default ProductCard;