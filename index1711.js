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


// every method 
let sArr1=[9,2,1,13,24,3,6,32];
let res1= sArr1.every((val)=>val >0)
console.log(res1);

//some method
let sArr2=[9,2,1,13,-24,3,6,32];
let res2= sArr1.some((val)=>val < 0)
console.log(res2);

// fill method 
// let sArr3=[9,2,1,13,-24,3,6,32];
// let res3= sArr1.some((val)=>val < 0)
// console.log(res3);
// let newArr1= [5,1,1,1,1,5].fill(-2,1,5)
// console.log(newArr1)

// splice 
let sArr3=[9,2,1,13,-24,3,6,32];
sArr3.splice(2,3,-10,-20)
console.log(sArr3);





