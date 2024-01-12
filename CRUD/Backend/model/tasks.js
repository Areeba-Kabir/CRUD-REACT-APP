const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
        title: String,
        description: String,
        status: Number
})
const UserModel=mongoose.model("tasks",UserSchema)
module.exports=UserModel
