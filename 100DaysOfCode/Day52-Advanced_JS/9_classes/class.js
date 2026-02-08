// a class is a blueprint for creating objects that share poperies. ECMA script 2015(ES6) introduced classes to work with oop. 

// class is a keyword used to declare a new class, 
// Constructor() : a constructor is a method created automatically when an objet is created using new keyword. 

class car{
    constructor(brand,model){
        this.brand = brand
        this.model = model
    }
    displaydetails(){
        console.log(`This car is ${this.brand} ${this.model}`)
    }
}

// creating an obj for class car
const mycar = new car("BMW","2 Series Gran Coupé")

mycar.displaydetails()

// creating a anonymous class : can be made via assigning a class to a variable
const Vehicle = class{
    constructor(type){
        this.type = type
    }
    showvechiceletype(){
        console.log(`Vehicle type : ${this.type}`)
    }
}
const myvechicleobj = new Vehicle("sedan")
myvechicleobj.showvechiceletype()
