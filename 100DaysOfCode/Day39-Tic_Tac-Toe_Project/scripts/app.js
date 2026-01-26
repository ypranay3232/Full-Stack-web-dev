let editedplayer = 0;

let players = [{
    name: "",
    Symbol: "X"
},
{
    name: "",
    Symbol: "O"
}
]
const playerconfigpopupelement = document.getElementById("popup")
const blockerelement = document.querySelector(".blocker")

const formelement = document.querySelector("form")
const errorsoutputelement = document.getElementById("config-errors")
const gameareaelement = document.getElementById("active-game")

const editplayer1btnelement = document.getElementById("edit-player1-btn")
const editplayer2btnelement = document.getElementById("edit-player2-btn")
const cancelconfigelement = document.getElementById("cancel-config-btn")
const startnewgame = document.getElementById("start-game-btn")

editplayer1btnelement.addEventListener("click", playerconfig)
editplayer2btnelement.addEventListener("click", playerconfig)

cancelconfigelement.addEventListener("click", closeplayerconfig)
blockerelement.addEventListener("click", closeplayerconfig)

formelement.addEventListener("submit", saveplayerconfig)

startnewgame.addEventListener("click",StartNewGame)