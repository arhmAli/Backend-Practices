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
