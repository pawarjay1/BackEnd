const express = require('express'); 
const router = express.Router(); 

const person = require('./../models/person'); 

// client side will send data on this path
router.post('/', async(req, res) => {
  try {
    const data = req.body;  //Assume the request body contains the person data

    //creating new person document using the mongoose model
    const newPerson = new person(data);

    //save the new person into the database 
    const response = await newPerson.save();
    console.log("response saved");
    res.status(200).json(response);
  }catch(err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get('/', async(req, res) => {
  try {
    const data = await person.find(); // thier will be time to fetch data from the database thats why we use async await
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

// get the person work type 
router.get('/:workType', async(req, res) => {
  try {
    const workType = req.params.workType;  // Extract the work type from the URL parameter
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await person.find({work : workType}); 
      console.log("response fettched"); 
      res.status(200).json(response); 
    }else{
      res.status(404).json({error: "invalid work type"}); 
    }
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

// update person data 
router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id; //extract the id from the URL parameters
        const updatePersonData = req.body; 

        const response = await person.findByIdAndUpdate(personId, updatePersonData,{
            new : true, //Return the updated document
            runValidators: true, //Run mongoose validation
        }); 

        if(!response){
            return res.status(404).json({error : "person not found"}); 
        }

        console.log("Data updated"); 
        res.status(200).json(response); 
    }catch(err){
        console.log(err); 
        res.status(500).json({error : "internal server error"}); 
    }
});

// Delete person Data 
router.delete('/:id', async (req,res)=> {
    try{
        const personId = req.params.id;

        // Assume you have person model 
        const response = await person.findByIdAndDelete(personId); 

        if(!response){
            return res.status(404).json({error : "person not found"}); 
        }

        console.log("Data deleted"); 
        res.status(200).json({error : "Person deleted successfully"}); 

    }catch(err){
        console.log(err); 
        res.status(500).json({error : "internal server error"}); 
    }
}); 

module.exports = router;