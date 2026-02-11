// Immediately invoked function expression, it runs as soon as its defined, it is a self executing anonymous function.

// we normally define a function as : 
function greet() {
    console.log("hello world")
}
greet()

// so we just wrap the function inside braces and we invoke it with braces ex: 

// (function hello(){
//     console.log("hello world")
// })()//this invoke the function call 


// In modern JavaScript (ES6+), we don't use IIFEs as much because we have Modules and let/const which provide block scoping. Back in the day, IIFEs were the only way to:

// Avoid Global Pollution: Keep variables from leaking into the global window object.

// Create Private Scopes: Protect data from being accessed by other scripts.


// implementing IIFE in modern way (ES6+)
const privateGreeting = "Hello from the module!";

export function greet() {
    console.log(privateGreeting);
}

// another ex: 
{
    const secret = "I am hidden";
    console.log(secret); // "I am hidden"
}

console.log(secret); // ReferenceError: secret is not defined

// ex: 
import { greet } from './filename';

greet(); // Works
console.log(privateGreeting); // Error: Not accessible here