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
        console.log("first itration", i, arr);

    }
    return arr
}
// console.log(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1]))

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;

        console.log(`log iteration ${i} arr ${arr}`);

    }
    return arr;
}
// console.log(selectionSort(arr));
// let arr = [8, 7, 6, 1,8,1,7]
function findDuplicates(arr) {
    let set = new Set();
    let duplicate = new Set();
    for (let i of arr) {
        if (set.has(i)) {
            duplicate.add(i);
        }
        else {
            set.add(i);
        }
    }
    return duplicate;
// }
// console.log(findDuplicates(arr));
// find k largest number 

}
let arr = [5,4,3,2,1]
function findKlargest(arr,k) {
    arr.sort((a,b)=>a-b)
    return arr[(arr.length)-k]
}
console.log(findKlargest(arr,3))


