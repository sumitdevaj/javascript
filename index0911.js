// callbacks 

function cbExample(name,cb){
   return cb(name);
}

function greetName(name){
    return `Hello ${name} good to see you!`;
}

console.log(cbExample("preetam",greetName))