import CartCard from "./CartCard";

const CartList = ({ cartItems,setCartItems }) => {

    return (
        <div className="flex flex-col w-[60%] items-start justify-center">
            {cartItems.map((item) => <CartCard key={item.id} cartItems={cartItems} setCartItems={setCartItems} id={item.id} name={item.name} quantity={item.quantity} price={item.price} url={item.url} />)}
        </div>
    )
}

export default CartList;