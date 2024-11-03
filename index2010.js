// array methods
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.slice(0, -5);
// console.log(newArr);

// splice method 

let arr1 = arr.splice(2, 2, ["hello", "Ffdd"])
// console.log('return array',arr1 ,'original array',arr);
// console.log(arr1);

let arr2 = [1, 3, 2, 10, 4, 3, 10];
// arr2.splice(1,2,'x','y')
// console.log(arr2);
// console.log(arr2.includes(3,2))

// console.log(arr2.indexOf(10));
// for(let i of arr2){
//     console.log(i); 
// }
let forEachArr = arr2.forEach((val, index) => {
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

// let filterArr = [45, 23, 32, 12, 76, 3, 54];
// let evenVal = filterArr.filter((val) => val % 2 !== 0)
// // console.log(evenVal);
// let dd = [94, 4, 2, 34, 40, 22, 23, 12, 4]
// let res = dd.filter((val) => val > 30).map((val) => val * 2).reduce((acc, val) => acc += val)
// console.log(res);


// find method 
let findArr = [12,34,32,53,43,2,120];
// console.log(findArr.findIndex((val)=>val === 43));

// let aa= findArr.concat([22,222,33,333])
// // console.log(aa);

// let ddd= findArr.join("+")
// console.log(ddd);

// every

// console.log(findArr.every((val)=>val>100))
 
// 27/10

// find intersaction 
let arr12=[1,2,3,4,5];
let arr13=[2,3,4];
let intersaction = arr12.filter((value)=> arr13.includes(value));
// console.log(intersaction);

// how to merge two arrays without duplicates 
let arr14 = [1,2,3];
let arr15 = [3,4,5];
// [1,2,3,5,4]
let newUniqueEleArr = [ ...new Set([...arr14, ...arr15])];
// console.log(newUniqueEleArr[2]);




function subArrar(arr,size){
    let chunks = [];
    for(let i=0;i<arr.length;i+= size){
        chunks.push(arr.slice(i,i+size));

    }
    return chunks;
}

// let res = [[1,2,3],[1,[2,3]],[4,3,2]]
// console.log(res.flat(2));

let unSort=[1,2,5,7,3,4,10,8];
let sumedVal= unSort.sort((a,b)=>b-a).filter((value)=>value>4).map((val)=>val*3);
// console.log(sumedVal);

// bubble sort 
let bubbleArr = [33,2,23,43,11]
function bubbleSort(arr){
    for(let i =0; i<arr.length; i++){
        for(let j=0;j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

// console.log(bubbleSort(bubbleArr));

function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let minIdx=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIdx]){
                minIdx=j;
            }
        }
        if(minIdx !== i){
            [arr[i],arr[minIdx]]=[arr[minIdx], arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort(bubbleArr));


