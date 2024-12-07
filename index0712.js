// console.log(this);
// // console.log(window);
// console.log(name);
// var name= "dev";
// console.log(name);

// let fname= 'pritam';
// function printName(name){
//     console.log(arguments);
    
//     let lName = name;
//     console.log(fname,lName);
// }
// printName("gupta","fjnfdj","kfndd")


// function printFullName(){
//     let fname='pritam';
//     let lname="gupta";
//     function printName(){
//         return(`${fname}${lname}`);
//     }
//     return printName()
// }
// console.log(printFullName())
function func(){
    let counter = 0;
    return function(){
    if(counter<1){
        console.log("welcome");
        counter++;
    } 
    else{
        console.log('already welecomed');
        
    }
}
}

const myFunc = func();
// console.log();
myFunc();
myFunc()
const myFunc1 = func()
myFunc1();
myFunc1();
