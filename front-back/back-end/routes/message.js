const express = require('express'); 
const msgController = require('../controllers/msgController')

const router = express.Router(); 


router.get("/msg",msgController.getMsg); 


module.exports = router; 