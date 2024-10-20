// array methods
let arr =[1,2,3,4,5,6,7,8];
let newArr= arr.slice(0,-5);
// console.log(newArr);

// splice method 

let arr1= arr.splice(2,2,["hello","Ffdd"])
// console.log('return array',arr1 ,'original array',arr);
// console.log(arr1);
 
let arr2 = [1,3,2,10,4,3,10];
    // arr2.splice(1,2,'x','y')
// console.log(arr2);
// console.log(arr2.includes(3,2))
 
// console.log(arr2.indexOf(10));
// for(let i of arr2){
//     console.log(i); 
// }
let forEachArr = arr2.forEach((val,index)=>{    
    // console.log(val*3)
    
})
// console.log(forEachArr);
// let sumOfArr= arr2.reduce((acc,val,index,arr)=>{
//    return acc+=val
// })
// console.log(sumOfArr);

// sorting 
// let sortingArr = [45,23,32,12,76,3,54]
// console.log(sortingArr.sort((a,b)=>a-b))


// filter 

let filterArr = [45,23,32,12,76,3,54];
let evenVal= filterArr.filter((val)=>val%2 !==0)
// console.log(evenVal);
let dd= [94,4,2,34,40,22,23,12,4] 
let res = dd.filter((val)=> val >30).map((val)=>val*2).reduce((acc,val)=>acc+=val)
console.log(res);



