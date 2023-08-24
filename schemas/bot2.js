const mongoose=require('mongoose')
const bot2UserSchema=new mongoose.Schema({
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
last_subscription_time:{
    type:Date,
    required:true,
    default:0  
    
},
subscription_payment:{    
    type:Number,
    required:true    
    
},
payment_status:{
    type:Boolean,
    default:false 
    
}


})

module.exports=bot2UserSchema

