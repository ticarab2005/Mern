const express = require("express");
const faker = require('@faker-js/faker');
const User = require('./user')
const Company = require('./company')

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/test/",(req,res)=>{
    res.json({message:"it's been done"})
})

app.get("/api/user/new",(req,res)=>{
    res.json(new User())
})

app.get("/api/companies/new",(req,res)=>{
    res.json(new Company())
})

app.get("/api/user/company",(req,res)=>{
    res.json({user: new User, company: new Company})
})




app.listen(port,()=>console.log(`running on port ${port} is a struggle {{{(>_<)}}}`))