// express js 
const express = require('express');
const app = express();

// database connection
const db = require('./db');

const person = require('./models/person');


// Built-in body-parser
app.use(express.json()); // for parsing application/json to object 
app.use(express.urlencoded({ extended: true })); // for form data

app.get('/', (req, res) => {
  res.send('Hello, Node.js! with');
});

// client side will send data on this path
app.post('/person', async (req, res) => {
  try {
    const data = req.body;  //Assume the request body contains the person data

    //creating new person document using the mongoose model
    const newPerson = new person(data);

    //save the new person into the database 
    const response = await newPerson.save(); 
    console.log("response saved"); 
    res.status(200).json(response); 

  } catch (err){
    console.log(err); 
    res.status(500).json({error: "internal server error"}); 
  }
});

app.get('/person', async(req,res)=>{
  try{
    const data = await person.find(); // thier will be time to fetch data from the database thats why we use async await
    console.log("data fetched"); 
    res.status(200).json(data); 
  }catch(err){
    console.log(err); 
    res.status(500).json({error: "internal server error"}); 
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
