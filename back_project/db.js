const mongoose = require('mongoose'); 

// define the MonogoDB connection URL 
const mongoURL = 'mongodb://localhost:27017/hotel'; // hotel is database name

// setUp MongoDB connection 
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

// get the default connection 
// mongoose maintains a default connection object representation the mongoDB connection. 
const db = mongoose.connection; // db this object is used to handle events and interact with database. 


//define event listeners for database connection. 
db.on('connected',()=>{
    console.log("Database is connected succesfully"); 
}); 

db.on('error',()=>{
    console.log("Database is not connected"); 
}); 

db.on('disconnected',()=>{
    console.log("Database is disconnected"); 
}); 

// Export the database connection
module.exports = db; 