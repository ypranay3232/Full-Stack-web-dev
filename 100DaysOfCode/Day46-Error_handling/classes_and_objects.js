const { Input } = require("postcss")

// we know that we can create objects like this 
const employee = {
    name: "jack",
    id: 123456,
    salary: 100000,
}

console.log(employee)

// to access them individually we use .operator
console.log(employee.id, employee.name)


// a class is a blueprint that contains some values or properties and by using an object we can create copies of class. A constructor is used inside a class to tell js how to construct an object based on this defined class

class Exp {
    constructor() {
        this.title = "Dev"
    }
}
// object creation : 
const obj1 = new Exp()
console.log(obj1)


class Exp1 {
    constructor(sal) {
        this.title = "Dev"
        this.sal = 10000
    }
}
// object creation : 
const obj2 = new Exp1()
console.log(obj2)

class Exp2 {
    constructor(JobTitle,address,JobSalary) {
        this.title = JobTitle
        this.sal = JobSalary
        this.address  = address
    }
}
// object creation.
const obj3 = new Exp2("Dev","ABC street,Mount View California",100000)
console.log(obj3)


class Exp3 {
    constructor(JobTitle,address,JobSalary) {
        this.title = JobTitle
        this.sal = JobSalary
        this.address  = address
    }
    describe(){
        console.log(`emp name is ${this.name} and his address is ${this.address}`)
    }
}
// object creation.
const obj4 = new Exp3("Dev","ABC street,Mount View California",100000)
const newobj = new Exp3("john","EFG street Chicago")
console.log(obj4)
newobj.describe()//this is a way to access them if something is available to print else we can always use console.log
// console.log(newobj)


// Another way of using objects : 
const username = ["some", "one"]
// const fname = username[0]
// const lname = username[1] //time taking process so we use the below wrap obj inside [] and assign the class.

const [ first, last ] = username
console.log(first)
console.log(last)

// ex: this is a well used example from project
const job = {title: "Developer", location: "ABC street "}
const { title, location} = job