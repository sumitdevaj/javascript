// array intro 
let array = [];
array.push(10);
array.push(20);
array.push(30);
array.push(40);
// array.pop();
array.unshift(200)
// console.log(array);

// bubble sort 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            
        }
        console.log("first itration",i, arr);
        
    }
    return arr
}
console.log(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1]))

