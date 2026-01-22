let inputelement = document.getElementById('product-name');
let remainingchars = document.getElementById('remaining-chars');

let maxallowedchars = Number(inputelement.maxLength);

function updateremainingchars(event) {
    // select the input and find how long the input is 
    let enteredtext = event.target.value;
    // find how long the text is 
    let enteredtextlength = enteredtext.length;
    // now find how many remaining characters we have : 
    let remainingcharsupdated = maxallowedchars - enteredtextlength;
    remainingchars.textContent = remainingcharsupdated;
}

inputelement.addEventListener('input', updateremainingchars)