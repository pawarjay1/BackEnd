const getMsg = (req,res) => {
    res.json({msg: "hello from backend !!!"});  
}; 

module.exports = {
    getMsg
}; 