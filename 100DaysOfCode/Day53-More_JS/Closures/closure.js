// A closure is a function that "remembers" and continues to access variables from its outer scope even after the outer scope has finished executing.

// Technically every function in js is a closure, because functions naturally maintain a link to their lexical environment (a structure that stores variables and functions )

// Unlike standard variables that disappear when a function finishes, variables captured by a closure stay in memory as long as the inner function exists.

// ex: 
// outer function 
function CreateCounter(){
    let count = 0 //this is  a private variable
    // inner function 
    return function(){
        count++//now this inner function remembers count 
        return count
    }
}

const counter = CreateCounter()
console.log(counter())
console.log(counter())
// the count is still alive even though the outer function is finished.


function outerfunc(){
    let varouter = "Inside outer scope"
    function innerfunc(){
        console.log(varouter)
        varouter = "Updated"
    }
    return innerfunc
}
const closure = outerfunc()
closure()
closure()