import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({

    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    phone: {
        type : Number,
        required : true,
    },
    message : {
        type : String,
        required : true,
    },

}) 

const User = mongoose.model.User || mongoose.model("User" , UserSchema)
export default User;

// yaha pe hum bol rahe hai ki agar ye hai "mongoose.model.User" to new mat bano schema agar nahi hai to "mongoose.model("User" , UserSchema)" bana do.  