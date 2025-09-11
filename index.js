let homeScoreBase = document.getElementById("home-score")
let guestScoreBase = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0 

function IncreaseScore(team,points) {
    if(team==="home") {
    homeScore+=points
    homeScoreBase.innerHTML=homeScore
    }
    else if (team==="guest"){
        guestScore+=points
        guestScoreBase.innerHTML=guestScore
    }
    highlightWinner()
    }
    
function newGame() {
    homeScore = 0
    guestScore = 0
    guestScoreBase.innerHTML = guestScore
    homeScoreBase.innerHTML = homeScore
    homeScoreBase.classList.remove("winner");
    guestScoreBase.classList.remove("winner");
    }
    
function highlightWinner() {
    homeScoreBase.classList.remove("winner");
    guestScoreBase.classList.remove("winner");
    if (homeScore > guestScore){
        homeScoreBase.classList.add("winner")
    }
    else if(guestScore > homeScore) {
        guestScoreBase.classList.add("winner")
    }
    
}
