// first select the elements (input field and button )
const qrText = document.getElementById("qrText")
const generateBtn = document.getElementById("generateBtn")
const qrImage = document.getElementById("qrImage")
const qrCodeBox = document.querySelector(".qr-code")

// function logic 
function generateqr(){
    // when user i/p is none return none else generate qr
    if(qrText.value.length > 0){
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText.value}`
        // show the qr code container
        qrCodeBox.classList.add("show")
    }else{
        // show error if i/p is empty
        qrText.classList.add("error")

        // now remove this error after a second so we can re attempt
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }
}
// make the function call only when generate button is clicked
generateBtn.addEventListener("click",generateqr)