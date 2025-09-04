const express = require('express'); 
const app = express(); 

const PORT = 3000; 

app.get("/",(req,res)=>{
    res.end("wecome to the home page");
}); 

app.get("/jay",(req,res)=>{
    res.end("jay is best");
}); 

// types method  : get,post,put,delete,petch
// status code : 200(ok) 404(not found) 500(serverconnection)


// listenign on port 3000
app.listen(PORT,()=>{
    console.log(`server is runing on port : ${PORT}`);
})