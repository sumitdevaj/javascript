// class 

// human Class 
class Human{
    constructor(name,lifeSpan,gender,colour,weight,height){
        this.name=name,
        this.lifeSpan = lifeSpan,
        this.gender = gender,
        this.colour = colour,
        this.weight = weight,
        this.height = height
    }
    walking(){
        return `${this.name} is walking at speed of 20kmpl`
        
    }
    running(){
        return `${this.name} is running at speed of 30kmpl`
    }
    sleeping(){
        return `${this.name} is sleeping `
    }
    eating(){
        return `${this.name} is eating`
    }
}

class SuperHuman extends Human {
constructor(power,name,lifeSpan,gender,colour,weight,height){
    super(name,lifeSpan,gender,colour,weight,height)
    this.power = power;

}
flying(){
    return `super human can fly`
}
fast(){
    return `super human are fast`
}
}
// let pritam = new Human('pritam',300,'male','brown',60,5.6);
// console.log(pritam);
let superMan= new SuperHuman(1000,"superman",'400','male','brown',200,7);
// console.log(superMan.walking())
// console.log(superMan.eating());


class Library{
    constructor(lname,laddress,owner,estYear){
        this.lname = lname;
        this.laddress = laddress;
        this.owner = owner;
        this.listOfBooks = [];
        this.estYear = estYear;
        this.listOfUsers = [];
        this.bowerrDetails =[]
        this.UserCount = 0
    }
    addStock(bTitle,bAuthor,bQty,bPrice,bYear,bType){
        this.listOfBooks.push(new BooksStock(bTitle,bAuthor,bQty,bPrice,bYear,bType))

    }
    issueBook(userId,bookName){
        let userDetails = this.listOfUsers.find(user=>{            
           return user.userId === userId
        })
        if(!userDetails){
            throw new Error('please register first for taking book')
        }
        let bookDetails = this.listOfBooks.find((book)=>{
           return book.bTitle = bookName;
        })
        if(!bookDetails){
            throw new Error('book not found')
        }
        if(bookDetails.bQty === 0){
            throw new Error('book is not available')
        }
        bookDetails.bQty -= 1;
        this.bowerrDetails.push({userId,bookName:bookDetails.bTitle,submitTime: new Date(Date.now() + 1000000000)})



    }
    returnBook(userId){
        let bowerrDetails = this.bowerrDetails.find((user)=>{
            return user.userId === userId
        })
        if(!bowerrDetails){
            throw new Error("Bowerr  details not found")
        }
        let bookdetails= this.listOfBooks.find((book)=>{
            return book.bTitle === bowerrDetails.bookName
        })
        bookdetails.bQty += 1;
        this.bowerrDetails.filter((user)=>{
            console.log(user,"fkdkdfjdkf");
            
            user.userId !== userId} )


    }
    addUser(name,email,phone,address){
        let userId = ++this.UserCount
       this.listOfUsers.push(new UserDetails(userId,name,email,phone,address)) 
    }

}

class BooksStock {
    constructor(bTitle,bAuthor,bQty,bPrice,bYear,bType){
        this.bTitle = bTitle;
        this.bAuthor = bAuthor
        this.bQty = bQty
        this.bPrice = bPrice
        this.bYear = bYear;
        this.bType = bType
    }
}
class UserDetails {
    constructor(userId, name, email, phone,address){
        this.userId = userId
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
    }
}

let indiaLibrary = new Library('indiaLibrary','tilak nagar','pritam','2000');
indiaLibrary.addStock('js book','sumit',20,400,2024,'coding');
indiaLibrary.addStock('history book','vishal',100,40,2002,'history');
indiaLibrary.addUser('raj','ranj@kvndk.com',654321234,'vkenvlkefnle');
indiaLibrary.issueBook(1,'js book');
indiaLibrary.returnBook(1);
console.log(indiaLibrary);

