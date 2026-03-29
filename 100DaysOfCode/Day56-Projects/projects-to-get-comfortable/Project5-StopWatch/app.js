let ms = 0;
let sec = 0;
let mins = 0;
let hrs = 0;

let timerInterval = null;
let status = "stopped";

function stopWatch() {
    ms++;

    if (ms / 100 === 1) {
        ms = 0;
        sec++;

        if (sec / 60 === 1) {
            sec = 0;
            mins++;

            if (mins / 60 === 1) {
                mins = 0;
                hrs++;
            }
        }
    }

    // Leading zeros logic
    let displayMs = ms < 10 ? "0" + ms : ms;
    let displaySec = sec < 10 ? "0" + sec : sec;
    let displayMins = mins < 10 ? "0" + mins : mins;
    let displayHrs = hrs < 10 ? "0" + hrs : hrs;

    // Use querySelector for classes or add an ID to your HTML
    document.querySelector(".display").innerHTML = 
        displayHrs + ":" + displayMins + ":" + displaySec + ":" + displayMs;
}

function start() {
    if (status === "stopped") {
        // 10ms interval for smooth milliseconds
        timerInterval = window.setInterval(stopWatch, 10);
        status = "started";
    }
}

function stop() {
    window.clearInterval(timerInterval);
    status = "stopped";
}

function reset() {
    window.clearInterval(timerInterval);
    ms = 0; sec = 0; mins = 0; hrs = 0;
    status = "stopped";
    document.querySelector(".display").innerHTML = "00:00:00:00";
}