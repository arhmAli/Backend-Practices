import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.js'

const app=express();

const connect=()=>{
    mongoose.connect("yourclusterhere").then(console.log("connected")).catch((e)=>{throw e})
}
const port=8800|| process.env.PORT;

app.use('/api/controller',userRoutes)

app.listen(port,()=>
connect()
console.log("conected serveer")
)
