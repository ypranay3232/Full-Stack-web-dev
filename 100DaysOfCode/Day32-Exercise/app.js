let person =
{
    name1: prompt("Enter your name "), //This is a property 
    greet() {
        alert("hello " + this.name1)//This is a method 
    }
}
person.greet()
console.log(10+4)
console.log(10-4)
console.log(10*4)
console.log(10/4)
// modulus operator returns remainder not quotient : 10/4 => 2/4 = (2) 
console.log(10/4)
// for mathematical operations general bodmas rules apply multiplication and addition have higher priority and ofc we can change priority by adding braces 
console.log((10+3-5)*10)
let result = 10*4
result++
result--

result+= 1
result-= 1
console.log(result)