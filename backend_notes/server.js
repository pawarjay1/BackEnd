const express = require('express');
const app = express();

const fs = require('fs'); 

// middleware plug-in (body parser)
app.use(express.urlencoded({extended: false})); 


// mock data for crud operation.
const users = require('./MOCK_DATA.json');

// Routes

// List all users
app.get("/user", (req, res) => {
    res.json(users);
});


// grouping the routes if the route is similar 
app
    .route("/user/:id")
    .get((req, res) => {  // :id is dynamic value 
        // get the user with id 
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        console.log(res.json(user));
    })
    .patch((req, res) => {
        // edit the user with id  
        const id = Number(req.params.id);
        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // delete the user with id  
        const id = Number(req.params.id);
        return res.json({ status: "pending" });
    });


// create new User
app.post("/user", (req, res) => {
    const body = req.body; 
    users.push({...body, id : users.length+1}); 
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users), (err,data)=>{
        return res.json({ status: "success", id : users.length+1 });
    }); 
});



// LISTEN THE PORT 
app.listen(3000, () => {
    console.log("server is running");
}); 