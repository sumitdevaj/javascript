//  console.log("program startd");
 
// setTimeout(()=>{
//     console.log("im am asynchronous funcion");
    
// },0)
// setTimeout(()=>{
//     console.log("im am asynchronous funcion 2");
    
// },0)
// console.log("progam excuted");

// callback 

// function sayMyName(cb){
//     console.log('hi sir nice to meet you');
//     cb();
    

// }
// function task(){
//     console.log("you task has finished");
    
// }

// sayMyName(task)

// promise creation 
let bucket =['salt', 'rice','vegetable','oil'];
const biryaniPromise = new Promise((resolve, reject) =>{
    if(bucket.includes('vegetable') && bucket.includes('rice') && bucket.includes('salt') && bucket.includes('oil')){
        for(let i =0 ;i<10000000;i++){
            
        }
        resolve("you are good to go with fried biryani")
    }
    else{
        reject("you dont have sufficient material")
    }
})

biryaniPromise.then((biryani)=>{
    console.log(biryani);
    
}).catch((err)=>{
    console.log(err);
    
})
setTimeout(()=>{
    console.log("this is for testing priority");
    
},0)
