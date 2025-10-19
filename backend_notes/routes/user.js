const express = require('express');
const user = require('../models/userSchema');

const router = express.Router();

// Routes

// List all users
router.get("/", async(req, res) => {
    const AllUser = await user.find({}); 
    const html = `
    <ul> 
        ${AllUser.map((user)=> `<li> ${user.first_name} - ${user.email}</li>`).join("")} 
    </ul>
    `;

    const msg = req.query.msg; 
    console.log(msg); 
    return res.send(html); 
});

// grouping the routes if the route is similar 
router
    .route("/:id")
    // .get(async (req, res)=>{  // :id is dynamic value 
    //     const find_user = await user.findById(req.params.id); 

    //     if(!find_user){
    //         return res.status(404).json({msg : "user is not found"}); 
    //     }

    //     return res.json(find_user); 
    // })
    .patch( async (req, res) => {
        // edit the user with id  
        const updateUser = await user.findByIdAndUpdate(req.params.id, {last_name : "chodu"}); 
        return res.status(200).json({ msg : "succesfully changed" });
    })
    .delete(async (req, res) => {
        // delete the user with id  
        const remove = await user.findByIdAndDelete(req.params.id);
        return res.status(200).json({ status: "successfully deleted" });
    });

//find user by its id 
router.get("/:id", async(req, res)=>{
    const find_user = await user.findById(req.params.id); 

    if(!find_user){
        return res.status(404).json({ status : "user is not found"}); 
    }

    return res.json(find_user); 
})


// create new User
router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body; // we need to pass body-parser for it. 
        // validation
        if (!first_name || !last_name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        const newUser = new user({ first_name, last_name, email });
        const response = await newUser.save(); // insert into database

        // const result = await user.create({
        //     first_name : body.first_name,
        //     last_name : body.last_name,
        //     email : body.email
        // }); 

        console.log(response);
        return res.status(201).json({ msg: "user created" });

    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router; 