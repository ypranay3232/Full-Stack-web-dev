// Selecting input elements 
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("male");
let female = document.getElementById("female");

// Selecting display elements for results and errors
let resultDisplay = document.getElementById("result-display");
let commentText = document.getElementById("comment-text");
let modal = document.getElementById("mymodel");
let modalText = document.getElementById("modaltext");
let span = document.getElementsByClassName("close")[0];

// Function to validate inputs before calculating
function calculate() {
    // Check if any fields are empty or if no gender is selected
    if (age.value === "" || height.value === "" || weight.value === "" || (male.checked === false && female.checked === false)) {
        modal.style.display = "block"; // Show the error modal
        modalText.innerHTML = `All fields are required!`; 
    } else {
        countBmi(); 
    }
}

// Function to perform the BMI math
function countBmi() {
    let h = Number(height.value);
    let w = Number(weight.value);

    // BMI Formula: weight (kg) / [height (m)]^2
    // We divide height by 100 to convert cm to meters
    let bmi = w / (h / 100 * h / 100);
    resultDisplay.innerHTML = bmi.toFixed(2);
    commentText.style.display = "block";
    if (bmi < 18.5) {
        commentText.innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        commentText.innerHTML = "Healthy Weight";
    } else {
        commentText.innerHTML = "Overweight";
    }
}

// Close the modal when the user clicks (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}