// strings 
// "knbkldfnvklfvdf",'vjenlrff',`vklsbokmb`

let name1 = "preetam";
console.log(name1.charAt(0));
console.log(name1.toUpperCase());

// searching in strings 

let str = 'hello,abhishek,hello,abhishek,world'
console.log(str.indexOf('z', 4));
console.log(str.includes("ow"));

// extracting parts of strings 

console.log(str.slice(2, 6));
console.log(str.substring(1, 7));
console.log(str.substr(1, 7));

// replace  parts str 

console.log(str.replaceAll('hello', 'hy'));

let trimHello = '      hello     kfkdmgdkld     '
console.log(trimHello);

console.log(trimHello.trim());

// split string 

// let word = str.split(',');
// console.log(word,"zzzz");
// console.log(word.join(''));


let strString = "my      name    is  pritam    ";
console.log(strString.split(' ').filter(str => str != "").join(' '));

// pallidrome 
function pallidrome(str) {
    let nStr = str.toUpperCase();
    let words = nStr.split('').reverse()
    return (str.toUpperCase() == words.join(''))



}
// console.log(pallidrome("Elle"));

// most frequent Char 

function mostFreq(str) {
    let freq = {};
    let maxChar = "";
    let maxCount = 0;
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
        if (freq[char] > maxCount) {
            maxCount = freq[char];
            maxChar = char
        }
    }
    console.log(freq);

    return maxChar
}
// console.log(mostFreq("helllooo"));

// capilalize
function cap(str) {
    let words = str.split(" ");
    let capArr = words.map((val) => val.charAt(0).toUpperCase() + (val.slice(1)).toLowerCase());
    return capArr.join(" ")
}
console.log(cap("hello world sdf"));


// callback 














