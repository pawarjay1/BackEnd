const express = require('express'); 

const user = require('../models/userSchema'); 


// Get all users and display on front end
const getUsers = async(req, res) => {
    const AllUser = await user.find({}); 
    const html = `
    <ul> 
        ${AllUser.map((user)=> `<li> ${user.first_name} ${user.last_name} - ${user.email}</li>`).join("")} 
    </ul>
    `;
    
    return res.send(html); 
}

module.exports = {
    getUsers
};