const mongoose=require('mongoose')
const bot1UserSchema=new mongoose.Schema({
user_name:{
    type:String,
    required:true
},
user_id:{
    type:String,
    required:true,
    unique: true
},
email:{
    type:String,
    required:true,
    unique: true
},
last_message_time:{
    type:Number,
    default:0
    
    
},
payment_status:{
    type:Boolean,
    default:false 
    
}


})

module.exports=bot1UserSchema

