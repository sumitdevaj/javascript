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
console.log(superMan.walking())
console.log(superMan.eating());


