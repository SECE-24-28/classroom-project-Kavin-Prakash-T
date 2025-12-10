import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDetails=()=>{

    const {id}=useParams()

    const [blog,setBlog]=useState([])
        useEffect(()=>{
            const fetchData=async()=>{
                const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data=await res.json();
                console.log(data)
                setBlog(data)
            }
            fetchData()
        },[])

    return(
       <div className=" mx-auto bg-blue-300 rounded-lg w-[700px] mt-10 p-5 text-center">
        <h1>Blog ID: {blog.id}</h1>
        <h1>User ID: {blog.userId}</h1>
        <h1 className="text-xl">{blog.title}</h1>
        <h1>{blog.body}</h1>
       </div>
    )
}

export default BlogDetails;
