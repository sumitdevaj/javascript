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
        return `Name :${this.name}  age :${this.age} email :${this.email}`;
    }

}

// function CreateUser(name,age,email){
//     const user = {}
//     user.name = name;
//     user.age = age;
//     user.email = email;
//     user.is18 = myMethod.is18
//     user.about = myMethod.about
//     return user;
// }




// function CreateUser(name,age,email){
//     const user = Object.create(CreateUser.prototype);
//     user.name = name;
//     user.age = age;
//     user.email = email;
//     // user.is18 = myMethod.is18
//     // user.about = myMethod.about
//     return user;
// }
// let user1 = CreateUser("pritam",17,"prdcmdp@gmail.com")
// // console.log(user1);
// CreateUser.prototype.is18 =function(){
//     return this.age >= 18;
//  }
//  CreateUser.prototype.about =function(){
//     return `Name :${this.name}  age :${this.age} email :${this.email}`;
// }
// console.log(CreateUser.prototype);



// let user2 = CreateUser("arbaz",27,"arbazmdp@gmail.com")
// console.log(user1.__proto__);
// console.log(user2);


// creation of object using new keyword 

// function CreateObject(name,email,password){
//     this.name=name;
//     this.email=email;
//     this.password=password;
//     this.is20 = function(){
//         console.log("kfmff");
        
//     }
// }

// let objUser1 =new CreateObject("pritam","vjdnkldckd",12334);
// console.log(objUser1);
function joinNewUser(name,email,phone,address,age,role){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.address=address;
    this.age = age;
    this.role=role;
}

function CreateBank (bankName,ifsc,address,branch,helpline,atm){
    this.bankName=bankName;
    this.ifsc=ifsc;
    this.address=address;
    this.branch=branch;
    this.listOfUsers=[];
    this.helpline=helpline;
    this.atm=atm;
    this.listOfEmp=[];
    this.balance=[];
    this.join= function (name,email,phone,address,age,role){
        switch(role){
            case "EMPLOYEE":
                this.listOfEmp.push(new joinNewUser(name,email,phone,address,age,role))
                break
            case "CUSTOMER":
                this.listOfUsers.push(new joinNewUser(name,email,phone,address,age,role))
                break
            default:
                throw new Error("bad role")
    }
}
    this.chequeApply= function (){
        
    }
    this.withdrawal= function (){}
    this.deposit = function (name,amount){
        for(let user of this.listOfUsers){
            if(user.name==name){
                this.balance.push({name,amount})
            }
        }
    }

}
let AxisBank = new CreateBank('AxisBank',"kfkcmkf","tilak nagar","TN",'123443221',5)
AxisBank.join('pritam',"vjndjrd@gmial.com","6543223456","bfjnrijdfv",12,"EMPLOYEE")
AxisBank.join('sumit',"vjndjrd@gmial.com","6543223456","bfjnrijdfv",12,"CUSTOMER")
AxisBank.deposit("sumit",500)
console.log(AxisBank.listOfUsers,AxisBank.listOfEmp,AxisBank.balance);










