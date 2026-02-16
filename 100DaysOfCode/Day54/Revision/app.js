// // Revision on things : Callbacks
// console.log("Start")

const { resolve } = require("path");

// function loginuser(email,password){
//     setTimeout(() => {
//         return {UserEmail: email}
//     }, 2000);
// }
// const user = loginuser("demo@gmail.com",1234567)
// console.log(user)
// // This returns Undefined because when we print user the information didnt returned yet because it takes 2seconds to return.

// // So we can pass a callback, a function which is passed as a parameter that runs on a later time.
// console.log("End")


// So we can wrap this inside a callback 
console.log("Start")

function loginuser(email, password, callback) {
    setTimeout(() => {
        // instead of returning we pass it inside callback
        callback({ UserEmail: email })
    }, 2000);
}
const user = loginuser("demo@gmail.com", 1234567, user => {
    console.log(user)
})
console.log("End")


// ------------------------------------------------------------------------------------------------
// Promises : 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User id ")
        resolve({ userid: 1234 })
    }, 2000);
})
promise.then(userid => {
    console.log(userid)
})


// -------------------------------------------------------------------------------------------
// Async Await : 

// 1. A function that returns a Promise, simulating an asynchronous operation
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("done!"); // This value will be the result of the 'await'
    }, 2000); // Resolves after 2 seconds
  });
}

// 2. An async function to use 'await'
async function asyncCall() {
  console.log('Calling...'); // This runs first
  // The function "pauses" here until the promise settles, without blocking the main thread
  const result = await resolveAfter2Seconds(); 
  console.log(result); // Logs "done!" after the promise resolves
  console.log('Continuing execution...');
}

// 3. Call the async function
asyncCall();

