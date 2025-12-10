import { useRef,useState } from "react";
import { Navigate, useNavigate } from "react-router";

const LoginForm = () => {

    const navigate=useNavigate();

    const [username, setUsername] = useState("")
    const passwordRef=useRef("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username,passwordRef.current.value)
        if(username==='abc' && passwordRef.current.value==='123'){
            console.log("Login Successful")
            sessionStorage.setItem('isLoggedIn',true);
            navigate("/admin")
        }else{
            console.log("Login Failed")
            sessionStorage.setItem('isLoggedIn',false);
        }
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