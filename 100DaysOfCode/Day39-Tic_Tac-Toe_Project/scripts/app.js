let editedplayer = 0;
let activeplayer = 0
let players = [{
    name: "",
    Symbol: "X"
},
{
    name: "",
    Symbol: "O"
}
]

let gameisover = false
let currentround = 1

let gameboard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const playerconfigpopupelement = document.getElementById("popup")
const blockerelement = document.querySelector(".blocker")
const activeplayernameelement = document.getElementById("active-player-name")

const formelement = document.querySelector("form")
const errorsoutputelement = document.getElementById("config-errors")
const gameareaelement = document.getElementById("active-game")

const editplayer1btnelement = document.getElementById("edit-player1-btn")
const editplayer2btnelement = document.getElementById("edit-player2-btn")
const cancelconfigelement = document.getElementById("cancel-config-btn")
const startnewgame = document.getElementById("start-game-btn")

const gamefieldelements = document.querySelectorAll(".Gameboard li")

editplayer1btnelement.addEventListener("click", playerconfig)
editplayer2btnelement.addEventListener("click", playerconfig)

cancelconfigelement.addEventListener("click", closeplayerconfig)
blockerelement.addEventListener("click", closeplayerconfig)

formelement.addEventListener("submit", saveplayerconfig)

startnewgame.addEventListener("click",StartNewGame)

for(const gamefieldelement of gamefieldelements){
    gamefieldelement.addEventListener("click",selectgamefield)
}

// Dark mode feature : 
const themetogglebtn = document.getElementById("theme-toggle")

// On load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
}

// On toggle
themetogglebtn.addEventListener("click", function () {
    document.body.classList.toggle("dark")

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    )
})
