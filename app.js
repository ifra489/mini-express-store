const express=require("express");
const app=express();

//! HOME

app.get("/",(req,res)=>{
    res.send("Welcome To my mini Express store")
})
app.get("/products",(req,res)=>{
    res.send
    (["Here our products are",
      {
            id:1,
            Product:"Laptop",
            price:80000
        },
        {
            id:1,
            Product:"computer",
            price:90000
        },
    ])
})
app.get("/contact",(req,res)=>{
    res.send("Contact us at ifra1231.com")
})
app.get("/about",(req,res)=>{
    res.send("About us :  We sell perfect Product")
})
app.post("/register",(req,res)=>{
    res.send('Your data Upload')
})
app.listen(3000,()=>{
   console.log('server running ')
})