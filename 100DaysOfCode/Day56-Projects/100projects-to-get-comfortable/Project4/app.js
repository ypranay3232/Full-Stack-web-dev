// Set the Target date we're counting down. 
const targetDate = new Date("December 31, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Converting  milliseconds to units
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // now calculate the remaining days 
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // then update the html elements
    document.getElementById("days").innerText = d;
    document.getElementById("Hours").innerText = h;
    document.getElementById("mins").innerText = m;
    document.getElementById("sec").innerText = s;

    // stop condition if the countdown is finished it should stop.
    if (gap <= 0) {
        clearInterval(timerInterval);
        alert("Happy New Year!");
    }
}

// Run the function every 1 second. 
const timerInterval = setInterval(updateCountdown, 1000);

// Runs immediately so it doesn't wait 1 second to start
updateCountdown();