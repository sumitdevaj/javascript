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
    about:function(sport){
        console.log(`my name is ${this.name} age ${this.age} email ${this.email} i like playing ${sport}`);   
    }}
const obj5 = {
    name:"amit",
    age:20,
    email:"amit@gmail.com",}
// userObj.about("music");
// userObj.about.call(obj5,"cricket");
// userObj.about.call(userObj,"tennis");
// let dd= userObj.about.bind(obj5,["writing"])
// userObj.about.apply(obj5,["fishing"])
// // console.log();
// dd()

// constructor function 
let myMethod ={
    is18 : function(){
        return this.age >= 18;
     },
     about : function(){
        return this
    }

}

function CreateUser(name,age,email){
    const user = {};
    user.name = name;
    user.age = age;
    user.email = email;
    user.is18 = myMethod.is18
    user.about = myMethod.about
    return user;
}
let user1 = CreateUser("pritam",17,"prdcmdp@gmail.com")
let user2 = CreateUser("arbaz",27,"arbazmdp@gmail.com")
console.log(user1.is18());
console.log(user2);







