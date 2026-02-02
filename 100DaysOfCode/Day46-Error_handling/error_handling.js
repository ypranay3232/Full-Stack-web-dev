// const fs = require("fs") //this part works only at serverside(nodejs), not in frontend

// function readfile(){
//     const filedata = fs.readFileSync('data.json')
//     console.log("File read sucess !")
// }
// readfile()//this fails, and the problem here is if we fail with the first operation the function stops the execution and we want to know the next part of it after error. now comes error handling


// so we use try catch block to handle errors. 

// const fs = require("fs")

// function fileread(){
//     try{
//         const filedata = fs.readFileSync("data.json")
//     }catch{
//         console.log("An error occurred")
//     }
//     console.log("executed successfully")
// }
// fileread()

// scope of a variable, constant, functions: ex we made fileread() that can only be used here in this file unless we export it manually, this is only true for nodejs not for frontend 
// (module.exports = {readfile : readfile})


// const,var,functions are available only in the block where you define them, block == {in b/w}
let x = 100//global scope

function fscope(){
    let functionscope = "function"//this can be accessible inside function
    console.log(functionscope)
}
fscope()
console.log(functionscope)//throws error variable functionscope is not defined

{
    name: "Blockscope" //block scope
}

