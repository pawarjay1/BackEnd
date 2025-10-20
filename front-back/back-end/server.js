const express = require('express'); 
const message = require('./routes/message'); 
const cors = require('cors'); 

require('dotenv').config(); 

const app = express();

// build-in middlewares 
app.use(cors({origin: "http://localhost:5173"}));  // Allow requests from frontend

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 


// routes
app.use('/api', message); 

app.get('/',(req,res)=>{
    res.end("welcome to home page"); 
})

app.listen(process.env.PORT,()=>console.log("server is runing on port 5000")); 