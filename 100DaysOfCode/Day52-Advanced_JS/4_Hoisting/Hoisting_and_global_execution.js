debugger

// in js : GLobal execution is the foundational environment where code runs, even when there is no code executing in js, its a default behavior which creates (window and this objects)

// Hoisting : is not defined in ECMA script its named by the community. so what is hoisting 

// let username = "qwerty"
// console.log(username)//this prints the username so what if we do it like this : 


// what is the output ? 
console.log(anotheruser)
var anotheruser = "demo"

// // But if we use const or let it throws error ? 
// console.log(demouser)//throws error cant access before initialization 
// // let demouser = "demo" 
// const demouser = "demo" 

// It's because js code runs in two phases : 1) memory creation phase :
// so whenever a variable is created then its assigned as undefined.  Test it by adding a  debugger 



// When a variable is being accessed before its initialization and when it doesn't throw error that var is "Hoisted" and we can't access it because Js keep this inside "Temporal dead zone" 

// Temporal Dead Zone : is a area of a block where a var is inaccessible til the pc completely initializes it.



// This works the same with functions : 
greet()//this works because the function code is stored while defining the function so we can access it any where. (.i.e. when ever we write a function it gets allocated the memory so you can access it anywhere) 

// function declaration 
function greet(){
    console.log("hello ")
}

// But when we create a function with a variable it wont be the same case : 

// sayhello()//throws an error 
// const sayhello = function(){
//     console.log("hello")
// }


// But if we use var keyword it returns undefined

demo()//this throws error because we are trying to access an undefined 
// function expression because we use = operation 
var demo = function(){
    console.log("hello")
}