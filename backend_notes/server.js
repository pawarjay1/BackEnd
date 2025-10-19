const express = require('express');
const app = express();

// db connection 
const db = require('./config/db');
const mongoose = require('mongoose');


// routes
const userRouter = require('./routes/user');

// env file 
require('dotenv').config();
 

const fs = require('fs');

// middleware plug-in (body parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes
app.use("/user", userRouter); 

app.use("/", (req,res)=>{
    res.end("Welcome page!"); 
})


// LISTEN THE PORT 
app.listen(process.env.PORT, () => {
    console.log("server is running");
});


