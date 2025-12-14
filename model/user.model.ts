import mongoose from "mongoose";

interface Iuser{
    _id?:mongoose.Types.ObjectId,
    email:String,
    password:String,
    name:String,
    image:String,
    createdAt?:Date,
    updatedAt?:Date,
}

const userSchema = new mongoose.Schema<Iuser>({
    name:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        select: false  
    },
    image:{
        type:String,
    }
},{timestamps:true})

const User = mongoose.models.User || mongoose.model("User",userSchema)
export default User