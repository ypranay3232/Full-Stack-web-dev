function StartNewGame(){
    // we start the game only if we have valid user names 
    if(players[0].name === "" || players[1].name === ""){
        alert("Please set custom Player Names for both players ")
        return 
    }
    gameareaelement.style.display = "block"
}