import express from 'express'
import mongoose from 'mongoose'

const app=express();
const connect=mongoose.connect((process.env.port).then(
console.log("Connected to the db").catch(e)=>(console.log(e)
)
const port =process.env.port||8800

app.listen((port)=>{
          connect();
          console.error(`PORT RUNNING ON ${port}`)
})
