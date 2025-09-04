// fs module interact with the file system on your machine—allowing you to read, write, update, delete, and manage files and directories.


const fs = require('fs'); 


// Creates a new file or overwrites existing one.
fs.writeFileSync("./garbageData/ajay","this is ajay"); //synchronuos 

fs.writeFile("./garbageData/jay","this is jay",()=>{  //async
    console.log("file is created"); 
}); 


// Reading Files 
const data = fs.readFileSync("./garbageData/ajay","utf-8"); 
console.log(data); 

fs.readFile("./garbageData/jay","utf-8",(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result); 
    }
}); 


// Adds data to an existing file
fs.appendFile("./garbageData/jay",`${Date.now()}\n`,()=>{   // basicaly used to create log file for server
    console.log("data is added to jay file"); 
});  


// delete a file 
fs.unlink("./garbageData/ajay",()=>{
    console.log("file is deleted"); 
}); 




