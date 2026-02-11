// Destructuring assignment in js is an expression makes easy to unpack values from arrays or properties from objects into separate local variables. An ES6 feature that makes easy of data extraction. 

// Array Destructing : uses square brackets [] to extract values based on their positions ex: 
const fruits = ["banana's","apple's","Oranges"]
const [fruit1,fruit2] = fruits
console.log(fruit1)
console.log(fruit2)


// skipping elements if we dont want some elements we can skip them using a comma.
const [fruit0, ,fruit3] = fruits
console.log(fruit3)//Oranges 


// Assignment of default values if extracted value is undefined 
const [person1, person2, person3 = "demo3"] = ["demo1", "demo2"]
console.log(person3)

// Rest operator (...)to add remaining elements into new array.
const [first, ...rest] = ["one", "two","three","four","five"]
console.log(first)
console.log(rest)