const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.get('/jay', (req, res) => {
  res.send('this is jaykumar aka jk..... ');
});

app.post('/user',(req,res)=>{
    res.send("data is saved in database"); 
    console.log("data is saved"); 
})

app.use((req, res) => {
  res.status(404).send(`<h1>404 - Page Not Found</h1>`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
