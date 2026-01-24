// for loop ! NOTE: all loops print unto N-1 unless specified <= 
for (let i = 0; i < 10; i++) {
    console.log(i)
}
// while loop 
let k = 0
let text = ""
while (k < 10) {
    text += "the number is " + k + "\n"
    k++
}
console.log(text)

// do while loop : 
let username = "demo"
let m = 0 
do{
    m++
    console.log(username)
}
while(m<username){
    if(m == 1){
        console.log(username[m])
        m--
    }
}

// for of : used to iterate over a array,string etc
let users = ["john", "max", "alex"]
for(const x of users){
    console.log(x)
}

console.log("\n")

// for in loop : used to loop on objects usually gets the keys 
const customers = {
    name : "alex",
    age : 25,
    salary: 10000
}
for(let x in customers){
    console.log(x)
    console.log(customers[x])//this prints the values of keys or to get specific we can also use 
    console.log(customers.salary)
}