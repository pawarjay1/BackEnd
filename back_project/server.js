// express js 
const express = require('express');
const app = express();

// database connection
const db = require('./config/db');


// Built-in body-parser
app.use(express.json()); // for parsing application/json to object 
app.use(express.urlencoded({ extended: true })); // for form data

app.get('/', (req, res) => {
  res.send('Hello, Node.js! with');
});


// import the router file
const personRoute = require('./routes/personRoute'); 
// use the routers 
app.use('/person',personRoute);  


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
