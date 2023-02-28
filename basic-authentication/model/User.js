import mongoose from 'mongoose';

const UserSchema={new mongoose.Schema({
           name:{
           type:String,
            required:true
           },
        password:{
           type:Number,
            required:true
           }
           },{timestamps:true}
)}
export default mongoose.model("User",UserSchema)
