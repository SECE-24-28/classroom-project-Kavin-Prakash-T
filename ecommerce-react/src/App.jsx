import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import CartList from "./components/CartList";
import OrderSummary from "./components/OrderSummary";
import { useState, useEffect } from "react";

const App = () => {

  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asus Laptop",
      price: 29,
      quantity: 2,
      discount: 0,
      url: "./asus.png"
    },
    {
      id: 2,
      name: "Asus Monitor",
      price: 35,
      quantity: 1,
      discount: 0,
      url: "./dell.png"
    }
  ])

  const updateOrderSummary = () => {
    let quantity = 0;
    let amount = 0;
    let discount = 0;

    cartItems.forEach(item => {
      quantity += item.quantity;
      amount += item.quantity * item.price;
      discount += item.quantity * (item.price * (item.discount / 100));
    });

    setQuantity(quantity);
    setAmount(amount);
    setDiscount(discount);
    setTotal(amount - discount + 50);
  }

  useEffect(() => {
    updateOrderSummary();
  }, [cartItems])

  return (
    <div className="bg-slate-700">
      <Header />
      <ProductCard />
      <div className="flex flex-row items-start justify-around">
        <CartList cartItems={cartItems}  setCartItems={setCartItems} />
        <OrderSummary  quantity={quantity} amount={amount} discount={discount} total={total} />
      </div>
      <Footer />
    </div>
  )
}

export default App;