function playerconfig(event) {
    editedplayer = +event.target.dataset.playerid

    const currentname = document
        .querySelector("#player-" + editedplayer + " h3").textContent

    formelement.playername.value = currentname !== "Player name" ? currentname : ""

    formelement.firstElementChild.classList.remove("error")
    errorsoutputelement.textContent = ""

    playerconfigpopupelement.style.display = "block"
    blockerelement.style.display = "block"

    formelement.playername.focus()
}



function closeplayerconfig() {
    playerconfigpopupelement.style.display = 'none'
    blockerelement.style.display = 'none'
    formelement.firstElementChild.classList.remove("error")
    errorsoutputelement.textContent = ""
    formelement.firstElementChild.lastElementChild.value = ""
}
function saveplayerconfig(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const enteredplayername = formData.get("playername").trim()

    if (!enteredplayername) {
        event.target.firstElementChild.classList.add("error")
        errorsoutputelement.textContent = "Please enter a valid name"
        return
    }
    const playerlistelement = document.getElementById("player-" + editedplayer)

    const playernameelement = playerlistelement.querySelector("h3")

    playernameelement.textContent = enteredplayername
    
    players[editedplayer -1].name = enteredplayername
    closeplayerconfig()
}

