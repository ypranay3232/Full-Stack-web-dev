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


// Now Counter 
let count = 0

const countvalue = document.querySelector(".count")

const DecrementButton = document.getElementById("Decrement")
const IncrementButton = document.getElementById("Increment")
const ResetButton = document.getElementById("Reset")

DecrementButton.addEventListener("click",() =>{
    count--
    countvalue.textContent = count
})
IncrementButton.addEventListener("click",() =>{
    count++
    countvalue.textContent = count
})
ResetButton.addEventListener("click",() =>{
    count = 0
    countvalue.textContent = count
})