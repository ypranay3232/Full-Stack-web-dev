// function clock(){
//     const now = new Date()

//     // Date() contains toLocaleTimeString() which turns raw date time into string
//     const formattedtime = now.toLocaleTimeString()
//     // now select the clock and convert it into text and assign this to formattedtime
//     document.getElementById("clock-display").textContent = formattedtime
// }
// clock()
// // set the interval to update the clock 
// setInterval(clock, 1000)


// // Now Counter 
// let count = 0

// const countvalue = document.querySelector(".count")

// const DecrementButton = document.getElementById("Decrement")
// const IncrementButton = document.getElementById("Increment")
// const ResetButton = document.getElementById("Reset")

// DecrementButton.addEventListener("click",() =>{
//     count--
//     countvalue.textContent = count
// })
// IncrementButton.addEventListener("click",() =>{
//     count++
//     countvalue.textContent = count
// })
// ResetButton.addEventListener("click",() =>{
//     count = 0
//     countvalue.textContent = count
// })

// Apparently this is not a good practice its good to add the global var inside a function so : 
function counter(){
    let counter = 0

    // now selecting the element 0 from html and also select all elements
    let selectingcount = document.querySelector(".count")
    let incbtn = document.getElementById("Increment")
    let Resetbtn = document.getElementById("Reset")
    let decbtn = document.getElementById("Decrement")

    let incbytenbtn = document.getElementById("tens")
    let incbyhundbtn = document.getElementById("hundreds")

    incbtn.addEventListener("click",() =>{
        counter++
        selectingcount.textContent = counter
    })
    decbtn.addEventListener("click",()=>{
        counter--
        selectingcount.textContent = counter
    })
    Resetbtn.addEventListener("click",()=>{
        counter = 0
        selectingcount.textContent = counter
    })
    incbytenbtn.addEventListener("click", () =>{
        counter += 10
        selectingcount.textContent = counter
    })
    incbyhundbtn.addEventListener("click",() =>{
        counter +=100
        selectingcount.textContent = counter 
    })

}
counter()