import express from 'express'
import mongoose from 'mongoose'

const app=express();

const port =process.env.port||8800

app.listen((port)=>
          console.error(`PORT RUNNING ON ${port}`))
