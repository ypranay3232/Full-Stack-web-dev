function displayTime(){
    // get the Date() which provides the time
    let datetime = new Date()
    let hrs = datetime.getHours()
    let mins = datetime.getMinutes()
    let sec = datetime.getSeconds()
    
    // now select the session : 
    let session = document.getElementById("session")

    
    // now Update the session :
    if(hrs >=12){
        session.innerHTML = 'PM'
    }else{
        session.innerHTML = "AM"
    }
    
    // to get 12 hours format 
    if(hrs >12){
        hrs = hrs - 12
    }
    // Just realized one thing i'm updating the value before converting 24 hours into 12 hrs so to fix i just have to update it after converting the values thats it.
    
    // now select the hours mins and seconds
    document.getElementById("hours").innerHTML = hrs
    document.getElementById("mins").innerHTML = mins
    document.getElementById("sec").innerHTML= sec
}
// now set an interval of 1 sec(10ms) to update the clock 
setInterval(displayTime,10)