const password = document.getElementById("password")
const strengthbar = document.getElementById("strengthbar")
const strengthtext = document.getElementById("strengthText")
const togglebtn = document.getElementById("togglebtn")
const loginBtn = document.getElementById("loginBtn")

// Initially disabling the button
loginBtn.disabled = true;

password.addEventListener("input", () => {
    let value = password.value;
    let strength = 0;

    if (value.match(/[a-z]/)) strength++;
    if (value.match(/[A-Z]/)) strength++;
    if (value.match(/[0-9]/)) strength++;
    if (value.match(/[@#$&!]/)) strength++;
    if (value.length >= 8) strength++;

    if (value === "") {
        strengthbar.style.width = "0%";
        strengthbar.style.background = "transparent";
        strengthtext.innerText = "Start Typing...";
        return;
    }
    // we enable the button only if strength is 3 or more (60%+)
    loginBtn.disabled = strength < 3;

    switch (strength) {
        case 1:
            strengthbar.style.width = "20%";
            strengthbar.style.background = "#ff4f4f";
            strengthtext.innerText = "Isse Acha tho mat he rakh";
            break;
        case 2:
            strengthbar.style.width = "40%";
            strengthbar.style.background = "#ff914d";
            strengthtext.innerText = "Bahut feka hai";
            break;
        case 3:
            strengthbar.style.width = "60%";
            strengthbar.style.background = "#f1c40f";
            strengthtext.innerText = "Kaam chal jayega";
            break;
        case 4:
            strengthbar.style.width = "80%";
            strengthbar.style.background = "#2ecc71";
            strengthtext.innerText = "Bhadiya hai";
            break;
        case 5:
            strengthbar.style.width = "100%";
            strengthbar.style.background = "#27ae60";
            strengthtext.innerText = "Teek hai fir login karlo ....";
            break;
    }
});

togglebtn.addEventListener("click", () => {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
    togglebtn.textContent = isPassword ? "Hide" : "Show";
});

loginBtn.addEventListener("click", () => {
    if (password.value.length > 0) {
        alert("Logged in successfully! (Just kidding, it's just a demo)");
    } else {
        alert("Password to daal de bhai!");
    }
});