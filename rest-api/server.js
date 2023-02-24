import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/users.js'
const app = express();

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(
        console.log("Connection to DB is successful")
    ).catch((err) => { throw err })
}
mongoose.set('strictQuery', true);

const port = process.env.PORT || 8800;

app.use('/api/user', userRoutes)
app.listen(port, () => {
    connect()
    console.log(`Server running on port ${port} 🔥`)
});
