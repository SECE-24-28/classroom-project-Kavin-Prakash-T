import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const Pagination = () => {
    
    const {currentPage,setCurrentPage}=useContext(GlobalContext)

    const increment = () => {
        setCurrentPage(currentPage + 1)
        sessionStorage.setItem("page",currentPage)
    }

    const decrement = () => {
        setCurrentPage(currentPage - 1)
        sessionStorage.setItem("page",currentPage)
    }

    return (
        <div className="w-[300px] mx-auto bg-yellow-50 m-4 p-4 rounded-md shadow-lg flex justify-between items-center">
            <button onClick={decrement} className="bg-blue-500 text-white px-4 py-2 rounded-md">{"<"}</button>
            <div className="text-xl bg-yellow-200 rounded-md px-4 py-2">{currentPage}</div>
            <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded-md">{">"}</button>
        </div>
    )
}
export default Pagination;