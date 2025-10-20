const mongoose = require('mongoose'); 

// define the structure (Schema)
const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        require : true
    },
    last_name : {
        type : String,
    },
    email : {  
        type : String, 
        require : true,
        unique: true
    }
}); 

// create user model 
const user = mongoose.model('user', userSchema); 

module.exports = user; 



// how mongoose works 
// schema - define the structure 
//      schema - model 
//      using this model we do crud operations 