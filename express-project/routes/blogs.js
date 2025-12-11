const express = require("express")
const fs= require("fs")
const router=express.Router()

router.get('/',(req,res)=>{
    const blogs=fs.readFileSync("data/blogs.json")
    res.json(JSON.parse(blogs))
})

router.get('/:id',(req,res)=>{
    console.log("id=",req.params.id)
    const blogs=fs.readFileSync("data/blogs.json")
    const blog=JSON.parse(blogs).find((p)=>{
        return p.id===parseInt(req.params.id)
    })
    if(blog){
    res.json(blog)}
    else{
        res.status(404).json({ error: `No Blog found`})
    }
})

router.delete("/:id",(req,res)=>{
    const blogs=fs.readFileSync("data/blogs.json");
    const updatedBlogs=JSON.parse(blogs).filter((p)=>{
        return p.id!==parseInt(req.params.id)
    })
    fs.writeFileSync("data/blogs.json",JSON.stringify(updatedBlogs,null,2));
    res.status(200).json({message:"Blog deleted successfully"})
})

router.post("/",(req,res)=>{
    const blogs=JSON.parse(fs.readFileSync("data/blogs.json"))
    const newBlog={
        id:blogs[blogs.length-1].id+1,
        title:req.body.name,
        description:req.body.description
    }

    const updatedBlogs=[...blogs,newBlog];
    fs.writeFileSync("data/blogs.json",JSON.stringify(updatedBlogs,null,2));
    res.status(201).json({message:"Blog created successfully"});
})

module.exports=router