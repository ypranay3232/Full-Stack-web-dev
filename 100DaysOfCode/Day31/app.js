let job = {
    title : "Developer",
    place : "Remote",
    salary : "80k$"
}
alert(job.place)


// Basic Operations : 
let string = "4"
let a = "4"
let b = 5
let c = "s"
console.log(a+b)//return 45 because in js every number even if it is in string format is considered as a number so it apply string concatenation. How ever if we try to add (4 + "s") returns 45s 
console.log(a-b)

// Introduction to functions : can be declared with name function
function Calculate_Age(){
    let age = prompt("Enter your age")
    let adult = 18
    if(age<adult){
        alert("Warning you are not an adult")
    }
    else{
        alert("Redirecting to vote")
        return true
    }
}

try{
    // this will break the code so we keep this in try
    alert(adult) //commented because in js if an error occurs the flow breaks 
}
catch(error){
    console.log("caught error the script will move further without error ")
    console.log("The error is : "+error.message)
}

let isAllowed = Calculate_Age()
if(isAllowed == true){
    alert("Access Granted Redirecting to voting system")
}
else{
    alert("Access Denied ")
}

// function with parameters
let newage = prompt("Enter your age again ! ")
function ageverification(newage){
    return newage 
}
let printage = ageverification(newage)
alert(printage)