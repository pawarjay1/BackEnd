// user define modules 

function addition(a,b){
    let c = a+b; 
    return c; 
}

function subtract(a,b){
    return a-b; 
}

module.exports = {
    addition,
    subtract
}


// import via require('./path');