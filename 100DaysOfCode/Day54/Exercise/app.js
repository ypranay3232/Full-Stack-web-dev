// Fetch some images using an api

// we use the fetch() which returns a promise so use .then()

const button = document.querySelector('button')
const header = document.querySelector('h1')

// im adding a reset button : a default var which store the text
const Resetbtn = document.getElementById('Reset')
const defaultText = "To motivate"
header.innerText = defaultText


button.addEventListener('click', () => {

    // we face an issue which is multiple requests so we stop the button once a click occur

    // STEP 1: Disable button immediately
    button.disabled = true

    // STEP 2: Show loading state
    header.innerText = "Loading..."

    // STEP 3: fetch the advice from the api
    fetch('https://api.adviceslip.com/advice')
        // .then(result => console.log(result))

        // we can also use result.json() 
        .then(result => result.json())
        .then(data => {
            console.log(data)
            // as you can see in the console when you click the button, the advice is inside slip so we print it as : 
            console.log(data.slip.advice)//this prints the advice
            // now to show the quotes on browser we do as :
            header.innerText = data.slip.advice
        })
        .catch(error => {

            // STEP 4: Handle error
            header.innerText = "Failed to fetch advice"

            console.error(error)

        })

        .finally(() => {

            // STEP 5: Re-enable button ALWAYS
            button.disabled = false

        })
})

Resetbtn.addEventListener('click', () => {
    header.innerText = defaultText
})

