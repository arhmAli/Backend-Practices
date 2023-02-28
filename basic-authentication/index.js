import express from 'express';
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'

const connect = () => {
    mongoose.connect(process.env.MONGO).then(
        console.log("Connection to DB is successful!")
    ).catch((err) => { throw err })
}
mongoose.set('strictQuery', true);

app.use('cont',authRoutes)
const port =process.env.PORT||8800
app.listen(port,()=>{
connect();
  console.log("SERVER IS RUNNING")
})
