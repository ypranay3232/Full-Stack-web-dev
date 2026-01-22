let anchorelement = document.getElementById('link')
anchorelement.href = 'https://developer.mozilla.org/en-US/'
anchorelement.textContent = 'Go to MDN'
// or we can also use query selector 

// anchorelement1 = document.querySelector('a')
// anchorelement1.href = 'https://www.google.com'
// anchorelement1.textContent = 'Go to Google'

let newanchorelement = document.createElement('a')

let firstpara = document.querySelector('p')

firstpara.append(newanchorelement)

// now accessing this newly created element inside p 
newanchorelement.href = 'https://www.whatsapp.com'
newanchorelement.textContent = 'Go to Whatsapp'


// how to remove elements from DOM ? Select an element then use remove() 
let temp = document.querySelector('h1')
temp.remove()

// to insert at last 
firstpara.parentElement.append(firstpara)
// to insert at first 
// firstpara.parentElement.insertBefore(firstpara)

firstpara.innerHTML = 'Hello <strong> World ! </strong> '


// working with events : 
let paragraphelement = document.getElementById('event')
function changeParatext(){
    paragraphelement.textContent = "clicked"
    console.log("paragraph Clicked ")
}
paragraphelement.addEventListener('click',changeParatext)

// listening to user text 
let textinput = document.querySelector('input')
function userip(event){
    // let enteredtext = textinput.value //this gets user typing 
    // we can also use this to get user typing 
    let enteredtext = event.target.value
    console.log(enteredtext)//this prints what user is typing in the console 
}
textinput.addEventListener('input',userip)