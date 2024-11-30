function CreateBank (bankName,bankCode,bankAdress,bankBranches,helpline,numOfAtm){
    this.bankName = bankName
    this.bankCode = bankCode
    this.bankAdress = bankAdress
    this.bankBranches = bankBranches
    this.listOfUsers = []
    this.helpline = helpline;
    this.numOfAtm= numOfAtm;
    this.userCount=0
    this.addUser= function(userName,userRole,email,phone,dob,gender,address,balance){
        userAccountNumber = Date.now() ;
        userId=++this.userCount;
        let user = new CreateBankUser(userName,userId,userRole,email,phone,dob,gender,address,userAccountNumber,balance);
        this.listOfUsers.push(user)
    }
    this.userBalance = function(userId){
        let data= this.listOfUsers.find(user=>user.userId === userId)
        if(!data){
            return 'account not exist'
        }
        return ` ${data.userName} account has this avaliable balance ${data.balance}`
    }
    this.userStatus = function(){

    }
    this.userDeposit = function(userId,amount){
        let data= this.listOfUsers.find(user=>user.userId === userId)
        if(!data){
            return 'account not exist'
        }
        data.balance += amount;
        return `previous amount is ${data.balance-amount} total balance ${data.balance} and you deposited ${amount} `


    }
    this.totalBalanceInBank = function(){
        let total =  0;
         for(let user of this.listOfUsers)
        total += user.balance
        return `total bank balance is ${total} `
    }
    this.userWithdrawal = function(userId,amount){
        let data= this.listOfUsers.find(user=>user.userId === userId)
        if(!data){
            return 'account not exist'
        }
        if(data.balance >= amount){
            return `remaining balance is ${data.balance - amount} and you`
        }
        if(data.balance < amount){
            return 'insufficient balance'
        }
    }
}
function CreateBankUser(userName,userId,userRole,email,phone,dob,gender,address,userAccountNumber,balance){
    if(phone.length>10){
        throw new Error("phone number must be at least 10 characters")
    }
    this.userName=userName;
    this.userId=userId;
    this.userRole=userRole;
    this.email=email;
    this.phone=phone
    this.dob=dob;
    this.gender=gender;
    this.address=address;
    this.userAccountNumber=userAccountNumber;
    this.balance = balance
    
}
// new key word creates 
// create {}
// return {}
// create connection betwn __proto__ and prototype

const PritamBank = new CreateBank("PritamBank",'qwerty','tilaknagar','tn','0119043420392',0);

PritamBank.addUser("Abhishek","CUSTOMER","gjeokgnedkgrd@gmail.com",54322343234,'121212','male','kdjkrnfdfjlgnfslss',100)
PritamBank.addUser("Aditya","CUSTOMER","gjeokgnedkgrd@gmail.com",'54322343234','121212','male','kdjkrnfdfjlgnfslss',100)
console.log(PritamBank.userBalance(1));
console.log(PritamBank.userDeposit(1,1000));
console.log(PritamBank.totalBalanceInBank());
console.log(PritamBank.userWithdrawal(1,100));
console.log(PritamBank.userWithdrawal(1, 1200));





// console.log(PritamBank);


