import { useEffect, useState } from "react";
import { Link } from "react-router";

const BlogList=()=>{

    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await res.json();
            console.log(data)
            setBlogs(data)
        }
        fetchData()
    },[])

    return(
        <>
        <div className="flex flex-row justify-between items-center flex-wrap p-5">
        {blogs.map((blog)=>{
             return(
             <Link to={`/blogs/${blog.id}`} key={blog.id}>
             <div  className="shadow-lg bg-pink-200 rounded-lg w-[300px] text-xl p-5 m-5 text-center">
                <h1 className="mb-3">{blog.id}</h1>
                <h1>{blog.title}</h1>
             </div>
             </Link>
             )
             
        })}
        </div>
        </>
    )
}

export default BlogList;