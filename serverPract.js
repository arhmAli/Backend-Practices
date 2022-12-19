const express=require("express");
const app=express();
const fs=require("fs");

const bodyParser=require("body-parser");

app.get("/",(req,res)=>{
  console.log(req)
  )
  
  app.get("/",(req,res)=>{
  console.log(res)
  })

  const port=process.evt||5000;
  
  app.listen(port)

  
  //For mongoose
  const mongoose=require("mongoose")
  const mongooUrl="someUrl"
  
  mongoose.connect(mongooUrl,{
  urlEncoded:true,
    topology:true
  })
  
  //Insert Some schema
  
  const Student=mongoose.schema("Student",{
  
    name:String,
    RollNo:Number,
    isPresent:Boolean
  })

  
  //Now we can test the schema by putting values
