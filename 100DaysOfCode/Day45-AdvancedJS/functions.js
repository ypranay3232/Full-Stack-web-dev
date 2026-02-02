// Diving deeper into js, create a basic function that prints hello.

const { cpSync } = require("fs")

// function greet(){
//     console.log("Hello")
// }
// greet()


// // we also know that we can write functions with arguments 
// let username = "john"

// function greet(username){
//     console.log("Hello "+ username)
// }
// greet(username)


// function greet(username){
//     console.log("Hi "+username)
// }
// greet("john")//even if you wont pass values it just return undefined and wont throw an error

// function greet(username = "max"){
//     console.log("hi "+ username)
// }
// greet()


// print the sum of numbers
function sum(...numbers){//the 3 dots ... states this function accepts any no of values
    let result = 0
    for(const number of numbers){
        result += number
    }
    return result
}
console.log(sum(1,2,3,4,5,6,7))

// NOTE : internally functions are just objects in js.


// template literals in js : are a way to create strings. they are enclosed by backtick (``) instead of a single or double quotes 


// why we need it : : You can create strings that span multiple lines without using escape characters like \n or concatenation operators (+)
const multiLine  = `this is 
a 
demo ex to make me u n d e r s t a n d 
how this wo r k`
console.log(multiLine)

// another feature is : String interpolation: You can embed variables and expressions directly within the string using the placeholder syntax ${expression}
user1 = "jack"
const data = `the user name is ${user1}`
console.log(data)

// PRIMITIVE VS REFERENCE VALUES : we can change constant values! 

const hobbies = ["reading","writing"]

hobbies.push("Coding")
console.log(hobbies)//NOTE : we cant directly assign the constant values with another but we can always add new data to it, only assigning wont work here.

// because objects and arrays are stored in special kind of memory but unlike int,char,str are primitive values so the values of assigned data is stored inside them : let a = 5; a stores 5

// reference values : objects, arrays: here that is not the case : here inside objects and arrays a pointer which points to the values will be stored. so when we assign directly values (=) which overwrites the past address which is not allowed 

// Primitive values are stored in : stack Memory
// Reference values are stored in : Heap Memory
const task = ["project1","project2"]

hobbies.push("project3")
console.log(task)