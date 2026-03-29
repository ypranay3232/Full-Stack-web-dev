// select the elements
const fromdropdown = document.getElementById("fromcurrency")
const todropdown = document.getElementById("tocurrency")

// now get the currencies : 
const currencies = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"];

// Loop though all options 
currencies.forEach(currency => {
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")

    option1.value = option2.value = currency
    option1.text = option2.text = currency

    fromdropdown.appendChild(option1)
    todropdown.appendChild(option2)
})

// default values to display on option 1 and 2 
fromdropdown.value = "USD"
todropdown.value = "INR"

// convert function logic : 
async function convertcurrency(){
    const amount = document.getElementById("amount").value
    const from = fromdropdown.value
    const to = todropdown.value

    // handling invalid conditions when user returns nothing
    if( amount === "" || amount <=0){
        alert("Invalid Amount")
        return
    } 

    try{
        // fetching live exchange rates 
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        const data = await response.json()

        // Get conversion rate
    const rate = data.rates[to];

    // Calculate result
    const result = (amount * rate).toFixed(2);

    // Display result
    document.getElementById("results").innerText =
      `${amount} ${from} = ${result} ${to}`;

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to fetch data");
  }
}