// callbacks 

function cbExample(name, cb) {
    return cb(name);
}

function greetName(name) {
    return `Hello ${name} good to see you!`;
}

// console.log(cbExample("preetam",greetName))

// function hello(x,y,z){
//     let a= y()
//     console.log(a);


// }
// hello("fkdfdk",()=>{return("this is callback function");
// },"sssww")

// add to numbers 

function addTwoNumbers(x, y) {
    console.log('this is only for printing data ', x + y);
    return (x + y);

}
let data = addTwoNumbers(12, 12)
console.log(data);

// fat arrow  lamba 

// let fnArrow =(a,b)=>{return(a+b)};
// console.log(fnArrow(12,13));


// question
function sumOf3Num(a, b, c) {
    console.log("vkjsdbskjezdnjlr");

    return
    console.log("printing", (a + b) * c);
    return (a + b)
}
let data1 = sumOf3Num(1, 2, 3)
// console.log(data1);
function printNameAndReturn(str) {
    console.log(str);
    return str.length;
}
let data2 = printNameAndReturn("pritam");
// console.log(data2);

function sumOfN(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        console.log(i);
        sum += i;
    }
    return sum
}
// let asa=sumOfN(6);
// console.log(asa);
// function fact(n){
//     let factS=1;
//     for(let i=n;i>0;i--){
//         factS *=i
//     }
//     return factS;
// }
// console.log(fact(3));
function fact(n) {
    let factS = 1;
    for (let i = n; i >= -n; i--) {
        if (i == 0) {

            continue;
        }
            factS *= i
    }
    return factS;
}
// console.log(fact(5));
let e= "fkd"
let f='www'
console.log(`string ${e} ,${f}`);

// let sym =  Symbol("1pdcmv");
// console.log(sym);
// fact
// let sum =1
// let a = 4;
// while(a>0){
//     sum*=a;
//     a--
// }
// console.log(sum);


// break and continue with
 let i =9;
do{
    console.log(i);
    i--
    
}
while(i>10)

// for loop 

// for(let i=0;i<10;i++){
    
//     if(i==5){
//         console.log(i,"deleted");
        
//        continue;
//     }
//     console.log(i);
    
// }
// array 

// let arr = []
// arr.push(10);
// arr.push(20);
// arr.pop();
// arr.unshift(100)
// arr.unshift(20);
// arr.shift()
// console.log(arr);
// let arr = [10,20,30,40,50,60,70,80,90];
// let [...a] = arr;
// console.log(a);

// callback function 
function dev(cb){
    
    console.log("hello world");
    cb();
    console.log("this is a higher order fuction");
 
    
    
}
function greet(){
    console.log("my code is ended");
    
}
dev(greet);








