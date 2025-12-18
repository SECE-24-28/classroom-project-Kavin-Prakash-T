import axios from "axios";
import { useRef,useState } from "react";
import { Navigate, useNavigate } from "react-router";
import {toast} from "react-toastify"

const LoginForm = () => {

    const navigate=useNavigate();
     const API_URL = import.meta.env.VITE_API_BASE_URL;

    const [username, setUsername] = useState("")
    const passwordRef=useRef("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {data}= await axios.post(`${API_URL}/auth/login`,{
            email:username,
            password:passwordRef.current.value});
            toast.success(data.messsage)
            sessionStorage.setItem("token",data.token)
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate("/products")
        }

    return (
        <>
            <div className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto p-10 bg-pink-200 shadow-lg rounded-xl">
                <h1 className="font-bold text-2xl mb-5">Login</h1>
                <input type="text" placeholder="Username" className="border p-2 rounded-sm w-[70%]" value={username} onChange={handleUsernameChange} />
                <input type="password" placeholder="Password" className="border p-2 rounded-sm my-5 w-[70%]" ref={passwordRef}/>
                <button className="bg-blue-600 text-white text-lg px-3 py-1 rounded-lg" type="submit" onClick={handleSubmit}>Login</button>
            </div>

        </>
    )
}

export default LoginForm;