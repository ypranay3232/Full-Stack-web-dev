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


// String operations 
// string concatenation 
console.log('max' + 'tennyson')

// to get the length of a string we use length method
let username = 'This is a demo text'
console.log(username.length)

// we can also access a string with index
console.log(username[2])

// strings slicing : slice()
console.log(username.slice(1,3))

// substring() : the only difference between slice () and substring is the substring assumes values as 0 if any start and end values are less than 0
// This assumes -1 as 0 and starts from 0 to 4 (n-1)
console.log(username.substring(-1,5))

// Converting to uppercase and lowercase 
console.log(username.toUpperCase())
console.log(username.toLowerCase())

// to remove whitespaces from a string we use trim() this removes whitespaces from both ends and also another method called trimstart() this only removes whitespaces from start
let whitespaces_Test = "         demo   "
console.log(whitespaces_Test.trim())
console.log(whitespaces_Test.trimStart())
console.log(whitespaces_Test.trimEnd())
