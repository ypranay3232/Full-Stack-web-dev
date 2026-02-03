//Async --> Asynchronous processing : means the operations can execute in parallel with other operations. 

// in simple terms Async : start all tasks and whatever output gets first print it.

// sync --> start one by one, dont touch another til the current execution is finished.

// So whats the need ? Js is a singe threaded language, it can only execute one task at a time.This is not a right approach for modern web dev ! so we use async await. 
const fs = require("fs")

function readfile(){
    // let filedata = fs.readFileSync('./data.txt')//the readFileSync process the file synchronously : means "this operation should be completed before the code execution is started"
    // console.log(filedata.toString())
    // console.log("hello world")//so we can print this statement before the file is read.


    // let filedata1 = fs.readfile('./data.txt')//this throws an error because it needs a second argument that should be a function callback()

    // a callback is a function passed as an argument to another function which is then called back/invoked when the async operation completes.
    let filedata1

    fs.readFile('./data.txt',function(error,filedata1){
        console.log(filedata1.toString())//this throws an error, it wont wait until the reading is done,
    })
        // console.log(filedata1.toString())//this throws an error, it wont wait until the reading is done. so we pass this line inside the function 
    console.log("hello world")
}

readfile()
