// we usually write functions as : 
function greet(){
    console.log("hello ")
}
greet()

const morning_greet = function(){//because functions are objects we can assign them to var 
    console.log("Good morning ! ")
}
morning_greet()

// arrow functions allow us to write a function() without defining it as : => {}  thats it.

const add = (a,b) => a+b
console.log(add(3,5))

const multiply = (c,d) =>{
    const result = c * d
    return result
}
console.log(multiply(3,3))