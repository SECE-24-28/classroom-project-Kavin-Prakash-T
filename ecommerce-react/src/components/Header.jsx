const Header = () => {
    return (
        <nav className="bg-slate-800 flex justify-between items-center text-white p-5">
            <h1 className="text-2xl font-bold">e-shop</h1>
            <div className="flex gap-7 items-center">
                <div className="text-black bg-gray-300 w-[250px] px-10 py-2 rounded-lg ">
                    <input type="text" placeholder="Search Products..." className="text-black focus:outline-none" />
                </div>
                <p className="hover:text-blue-500">Home</p>
                <p className="hover:text-blue-500">All Products</p>
                <p className="hover:text-blue-500">Cart (2)</p>
            </div>
            <div className="flex gap-4">
                <button>Login</button>
                <button className="bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-600">Sign Up</button>
            </div>
        </nav>
    )
}

export default Header;