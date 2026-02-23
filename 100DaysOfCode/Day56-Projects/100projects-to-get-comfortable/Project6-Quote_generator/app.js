// first Select the elements
const quoteText = document.querySelector(".quote");
const authorname = document.querySelector(".author .name")
const quoteBtn = document.querySelector("button");
const soundbtn = document.querySelector(".sound")
const copybtn = document.querySelector(".copy")

// now we define the click action 
function randomquote() {

    // disable button while loading
    quoteBtn.disabled = true
    quoteBtn.innerHTML = "Loading Quote..."

    fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(data => {
            quoteText.innerHTML = data.quote
            authorname.innerHTML = data.author
            quoteBtn.disabled = false
            quoteBtn.innerHTML = "New Quote"
        })
        .catch(err => {
            console.error(err)
            quoteText.innerHTML = "Failed to load quote"
            authorname.innerHTML = ""
            quoteBtn.disabled = false
            quoteBtn.innerHTML = "New Quote"
        })
}

soundbtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`)
    speechSynthesis.speak(utterance)
})

copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
    alert("Quote copied!");
});

// now add the listener (This now runs as soon as the script loads)
quoteBtn.addEventListener("click", randomquote);