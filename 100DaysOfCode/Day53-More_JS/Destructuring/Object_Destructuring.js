// Object Destructuring uses curly braces : {} used to extract properties based on their names, the advantage here is : the order of variables does not matter.

const person = {name1 : "demo", age : 30}
const {name1,age} = person
console.log(name1)
console.log(age)

// Assigning new variable names. via ' : '  a colon 
const newperson = {name2: "demo2", age1: 40}
const {name2: personname, age1: personage} = newperson
console.log(personname)
console.log(personage)

// providing the default values : 
const {name, gender ="Unknown"} = {name: "john"}
console.log(gender)


// collecting remaining properties : using rest operator
const person1 = {name3 : "demo", age : 30}
const {name3, ...details} = person1
console.log(name3)
console.log(details)


// Nested destructuring : 
const person2 = {
    name : "john",
    address: {city: "New York", country : "USA"}
}
const {address : {city}} = person2
console.log(city)