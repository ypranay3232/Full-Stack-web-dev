// Async await is a modern and clear syntax to handle async operations, Making code more readable, works as keeping a "async" keyword before a function ensures that it always returns a promise, and "await" is used inside of a function which pauses the code execution at that line until promise is resolved, then continue the result.

async function fetchdata(){
    return new Promise(resolve =>{
        let timeout = 3000
        setTimeout(() => {
            resolve("data")
        }, timeout);
    })
}
async function handledata(){
    const data = await fetchdata() //wait tile fetch data returns the value as promised (but it takes 3 seconds)
    console.log(data)
}
handledata()