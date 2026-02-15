// AJAX = asynchronous js and xml.  Is a technique used to create faster, interactive applications by exchanging data with a server behind the scenes. 

// This technique allows the page to update contents dynamically without reloading the entire page.

// the browser does not need to wait for the server response to continue user interaction. 


// RECAP to sync js : Because js is a single threaded language it reads line by line

function demo(){
    console.log("inside a function ")
    console.log("doing some stuff ")
}

console.log("start")
demo()

console.log("End ")

// The callstack would look like this : 



/*

console.log()
demo()
main()


once function call is done its get popped.
*/

// async ex: here we get start, end then we get the "printing after 2 seconds"
console.log("Start")
setTimeout(() => {
    console.log("printing after 2 seconds")
}, 2000);
console.log("End")

/*
The call stack would work as :


settimeout() // rather than waiting for 2 seconds we can run console.log("end")
console.log("start") //once run it this is removed from stack
main() or script

So there is this thing called : "Web API " so when we call settimeout(), Js pass this to "WEB API". And the click() (eventlisteners) also gets passed to WebApi which keeps track of clicks and counts. 
*/

