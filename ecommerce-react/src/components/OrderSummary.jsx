const OrderSummary = ({ quantity, amount, discount, total }) => {
    return (
        <div className="bg-slate-800 w-[400px] h-[475px] text-white p-10 border-gray-400 border rounded-xl m-10 text-center">
            <h1 className="font-bold text-2xl">Order Summary</h1>
            <div className="flex text-lg font-semibold justify-between mt-10">
                <h1>Total Items:</h1>
                <p className="text-green-500">+ {quantity}</p>
            </div>
            <div className="flex text-lg font-semibold justify-between mt-5">
                <h1>Total Amount:</h1>
                <p className="text-green-500">+ {amount}</p>
            </div>
            <div className="flex text-lg font-semibold justify-between mt-5">
                <h1>Discount Amount:</h1>
                <p className="text-red-500">- {discount}</p>
            </div>
            <div className="flex text-lg font-semibold justify-between mt-5">
                <h1>Shipping Amount:</h1>
                <p className="text-green-500">+ 50</p>
            </div>
            <hr className="mt-10 border-2" />
            <div className="flex text-lg font-semibold justify-between mt-5">
                <h1>Total:</h1>
                <p>$ {total}</p>
            </div>
        </div>
    )
}

export default OrderSummary;
