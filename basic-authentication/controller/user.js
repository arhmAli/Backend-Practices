import mongoose from 'mongoose'
import User from '../model/User.js'
import bcrypt from 'bcrypt'

export default cont=async(req,res)=>{
try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser=new User({...req.body,password:hash});
        await newUser.save();
        res.status(200).send("Created user")
}catch(e){
console.log(e)
}
}
