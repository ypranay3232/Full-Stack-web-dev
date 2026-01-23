let profilename = 'max'

if (true) {
    console.log(profilename)
}

let a = 5
let b = '5'

// == checks the values but === checks the values and types of data both are  
// if(a==b){
if (a === b) {
    console.log(true)
} else {
    console.log(false)
}
// negation operator used to convert a false value to true and true to false and it checks if something is not equal, but if we use != we check for values only if we use (!== we check both value and type of data ) 
if (a !== b) {
    console.log(true)//because int 5 != string 5
} else {
    console.log(false)
}

let char1 = 'cb'
let char2 = 'ab'

if(char1>char2){
    console.log(true)//true because checking is done by char by char c > a true so stopped checking
}

// logical operators 
if(a === b && char1 > char2){
    console.log(true)
}else{
    console.log(false)
}

if(a ==b || char1 < char2){
    console.log(true)
}else{
    console.log(false)
}

let x = 10
let y = 20
let z = 30
if(x>y && x > z){
    console.log("x is biggest number")
}else if(y> x&& y> z){
    console.log("y is biggest number")
}else{
    console.log("z is biggest number")
}