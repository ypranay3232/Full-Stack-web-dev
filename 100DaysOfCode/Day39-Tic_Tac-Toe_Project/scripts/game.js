function StartNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Please set custom Player Names for both players")
        return
    }

    gameisover = false
    currentround = 1
    activeplayer = 0

    gameboard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    const gamefields = document.querySelectorAll(".Gameboard li")
    for (const field of gamefields) {
        field.textContent = ""
        field.className = ""
    }

    document.querySelector("#active-game article").style.display = "none"
    gameareaelement.style.display = "block"

    // we are seeing this "its your turn player name" to fix it we do this just adding player 1 name 
    activeplayernameelement.textContent = players[0].name
}

function selectgamefield(event) {
    if (event.target.classList.contains("disabled") || gameisover) {
        return
    }
    const selectedcolumn = event.target.dataset.col - 1
    const selectedrow = event.target.dataset.row - 1

    event.target.textContent = players[activeplayer].Symbol
    event.target.classList.add("disabled")
    event.target.classList.add(
        activeplayer === 0 ? "player-x" : "player-o"
    )
    gameboard[selectedrow][selectedcolumn] = activeplayer + 1
    const winnerid = checkforgameover()
    if (winnerid !== 0) {
        endgame(winnerid)
        return
    }
    activeplayer = activeplayer === 0 ? 1 : 0
    currentround++
    activeplayernameelement.textContent = players[activeplayer].name
}



function checkforgameover() {
    // Rows
    for (let i = 0; i < 3; i++) {
        if (
            gameboard[i][0] > 0 &&
            gameboard[i][0] === gameboard[i][1] &&
            gameboard[i][1] === gameboard[i][2]
        ) {
            return gameboard[i][0]
        }
    }

    // Columns
    for (let i = 0; i < 3; i++) {
        if (
            gameboard[0][i] > 0 &&
            gameboard[0][i] === gameboard[1][i] &&
            gameboard[1][i] === gameboard[2][i]
        ) {
            return gameboard[0][i]
        }
    }
    // Diagonals
    if (
        gameboard[0][0] > 0 &&
        gameboard[0][0] === gameboard[1][1] &&
        gameboard[1][1] === gameboard[2][2]
    ) {
        return gameboard[0][0]
    }
    if (
        gameboard[0][2] > 0 &&
        gameboard[0][2] === gameboard[1][1] &&
        gameboard[1][1] === gameboard[2][0]
    ) {
        return gameboard[0][2]
    }
    // Draw
    if (currentround === 9) {
        return -1
    }
    return 0
}

function endgame(winnerid) {
    gameisover = true

    const gameoverarticle = document.querySelector("#active-game article")
    gameoverarticle.style.display = "block"

    const headlineelement = gameoverarticle.querySelector("h2")
    const winnernameelement = document.getElementById("winnername")

    if (winnerid > 0) {
        headlineelement.textContent = "You won "
        headlineelement.appendChild(winnernameelement)
        winnernameelement.textContent = players[winnerid - 1].name
    } else {
        headlineelement.textContent = "It's a draw!"
    }
}

