// function returing function 
function myFunc(){
    function hello(){
        console.log("hello world");
        
    }
    return hello;
}
 let data =myFunc()
data()

// let mydata = ()=>{}
//  mydata()

// array methods 
// map 
let arr = [2,3,4,5,6];
let newMapArr= arr.map((val,index,arr)=>val*3)
let filteredArr = newMapArr.filter((val,index,arr)=>val>8)
console.log(filteredArr);
let ss= filteredArr.reduce((acc,val)=>acc*val,0)
console.log(ss);

// sorting
let sArr=[9,2,1,13,24,3,6,32];
let result= sArr.sort((a,b)=>b-a);
let result1= sArr.sort()
console.log(result);

let check= sArr.find((val)=>val>40);
console.log(check);



