import mongoose from 'mongoose'

const someSchema=new mongoose.Schema({
    name{
     type:String,
    required:true,
    unique:true,
    default:"",   
    },
    password{
        type:Number,
        required:true,
    }
})
export default mongoose.model("schema",someSchema);
