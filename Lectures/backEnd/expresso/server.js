const express = require("express");
const faker = require('@faker-js/faker');
const Order = require('./order.js')

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/test/", (req,res)=>{
    res.json({message:"you did it!"})
})

app.get("/api/order/", (req,res)=>{
    res.json(new Order());
})

// you can out the amount of orders here, loop to the array
app.get("/api/order/:amount", (req,res)=>{
    const orders = [];
    for(let i = 0; i < req.params.amount;i++){
        // we're going to push a new order here
        orders.push(new Order());
    }
    res.json(orders)
})

app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be!!!`))