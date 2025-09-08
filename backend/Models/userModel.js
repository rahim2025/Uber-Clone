const mongoose = require ("mongoose");
const { string } = require("zod");

const userSchema  = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength :[2,"Minimum 2 characters required"]
        },
        
        lastname:{
            type:String,
                required:true,
                minLength:[2,"Minimum 2 character required"]
            }

    },
    email:{
        type:string,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    socketId:{
        type:String,
    }

});

const userModel = mongoose.model("User",userSchema)

module.exports = userModel ;