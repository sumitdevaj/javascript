// objects 

// let obj = {};
// obj.name="pritam";
// obj["hello"]="hi"
// obj["full Name"]="pritam gupta"
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// for(let i in obj){
//     console.log(i,obj[i]);
    
// }
let obj1={
    key1:"value1",
    key2:{userName:"pritam"},
}
// let obj2={
//     key3:"value3",
// }
let obj2= Object.assign({},obj1);
obj2.key3="value3";
console.log(obj1?.key2?.userName);

const userObj= {
    name:"pritam",
    age:16,
    email:"pritam@gmail.com",
    about:function(){
        // console.log(this);
        
        console.log(`my name is ${this.name} age ${this.age} email ${this.email}`);   
    }
}
userObj.about();


