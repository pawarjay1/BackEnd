const mongoose = require('mongoose'); 

// connection 
mongoose.connect('mongodb://127.0.0.1:27017/learning')
    .then(()=> console.log("database is connected"))
    .catch((err)=> console.log("mongo err",err)); 


const db = mongoose.connection; 

module.exports = db; 
