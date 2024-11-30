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
    this.userBalance = function(){

    }
    this.userStatus = function(){

    }
    this.userDeposit = function(){

    }
    this.totalBalanceInBank = function(){

    }
    this.userWithdrawal = function(){

    }
}
function CreateBankUser(userName,userId,userRole,email,phone,dob,gender,address,userAccountNumber,balance){
    this.userName=userName;
    this.userId=userId;
    this.userRole=userRole;
    this.email=email;
    this.phone=phone;
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
PritamBank.addUser("Aditya","CUSTOMER","gjeokgnedkgrd@gmail.com",54322343234,'121212','male','kdjkrnfdfjlgnfslss',100)

console.log(PritamBank);


