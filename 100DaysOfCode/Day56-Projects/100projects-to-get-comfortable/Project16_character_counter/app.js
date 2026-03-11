const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const clearBtn = document.getElementById("clear-btn");
const MAX_CHARS = 50;
// listens while typing
textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    charCount.innerText = length;

    // Change color when getting close (e.g., at 40 characters)
    if (length >= 40) {
        charCount.classList.add("text-danger");
    } else {
        charCount.classList.remove("text-danger");
    }
});

// Clear button logic
clearBtn.addEventListener("click", () => {
    textarea.value = "";
    charCount.innerText = "0";
    charCount.classList.remove("text-danger");
});