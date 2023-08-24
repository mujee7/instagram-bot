require('dotenv').config();
const cors=require('cors')
const mongoose=require('mongoose');
const express=require('express')
const stripe = require('stripe')(process.env.SECRET_KEY);
const app=express();


app.get('/',async (req,res)=>{
    
    res.json({"message":"hello revcieved"})
   
})





app.listen(5000, () => console.log('Running on port 5000'));

