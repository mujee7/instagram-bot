require('dotenv').config();
const cors=require('cors')
const mongoose=require('mongoose');
const express=require('express')
const app=express();


app.get('/',async (req,res)=>{
    
    res.json({"message":"hello revcieved"})
    console.log("webhook worked")
   
})





app.listen(5000, () => console.log('Running on port 5000'));

