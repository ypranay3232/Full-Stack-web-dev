const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    charCount.innerText = length;

    if (length > 10) {
        charCount.classList.add("text-danger");
    } else {
        charCount.classList.remove("text-danger");
    }
});