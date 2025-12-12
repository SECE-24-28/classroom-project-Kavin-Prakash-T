//const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.method==='GET' && req.url==='/'){
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify({message:"Hello"}))
//     }else if(req.method==='GET' && req.url==='/about'){
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify({message:"About"}))
//     }else{
//         res.writeHead(404,{'Content-Type':'application/json'});
//         res.end(JSON.stringify({error:"Not Found"}))
//     }
// });
const express=require("express")
const fs=require("fs")
const app=express()
const cors=require("cors")
const productsRouter=require("./routes/products")
const blogsRouter=require("./routes/blogs")
const createDB=require("./config/db")

createDB()

app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
})

// app.get("/",(req,res)=>{
//     res.json({message:"Hello Express"})
// })

// app.get("/about",(req,res)=>{
//     res.json({message:"About"})
// })


//app.use(express.json()) - to pass the data body from postman to code


app.use("/products",productsRouter)
app.use("/blogs",blogsRouter)

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})