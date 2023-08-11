const express=require("express");

const app=express();

app.listen("/",(req,res)=>{
    res.send("HomePage");
})

app.listen((req,res)=>{
    console.log(`Listening to Port 8000`);
})