const mongoose=require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/school");
        console.log("MongoDB connected✅")
    }
    catch(err){
        console.log("Mongodb commection error❌")
        process.exit(1);
    }
}

module.exports=connectDB