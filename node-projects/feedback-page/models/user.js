const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    surname:String,
    birthdate:Date,
    email:{
        type:String,
        unique:true,
        require:[true,"this email is required"]
    },
    password:String,
    socialProfiles:{
        facebook:String,
        instagram:String
    }
})

const User=mongoose.model("user",userSchema)
module.exports=User