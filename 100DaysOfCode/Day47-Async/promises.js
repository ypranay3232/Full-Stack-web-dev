// when we have multiple async operations which depends on each other, so the more callback functions we have the more "Nesting on callback " leads to callback hell.


// (.i.e. a callback which is depending on  another callback to execute --> callback hell)

// Promises : promise is an object  representing eventual completion or failure of an async operation.

function fetchdata(){
    return new Promise((resolve,reject)=>{
        let timeout = 5000
        setTimeout(() => {
            resolve(`data sent after ${timeout/1000} seconds`)
        }, timeout);//prints output after 5 seconds
    })
}
fetchdata()
// promises are objects that use .then() and .catch() block for error handling
.then(data =>{
    console.log(data)
})
