let humanScore = 0;
let computerScore = 0;

const options = {"rock":'🪨', "paper":'📃', "scissors" :'✂️'}
const winConditions = {
                        '🪨':{'📃':false,'🪨':false,'✂️':true},
                        '📃':{'📃':false,'🪨':true,'✂️':false},
                        '✂️':{'📃':true,'🪨':false,'✂️':false},
                    }
let stopPlaying = false

function getComputerChoice(){
    // Get option object keys as an array
    const optionsIdx = Object.keys(options);
    // Get random number based on option length
    let randomNum = Math.floor(Math.random() * optionsIdx.length);
    let choice = optionsIdx[randomNum];

    return options[choice]
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice){
        return "It's a draw"
    }
    else if (winConditions[humanChoice][computerChoice]){
        humanScore++
        return `Point for human! - Human:${humanChoice} beats Computer:${computerChoice}`
    }else{
        computerScore++
        return `Point for Computer! - Human: ${humanChoice} is beaten by Computer:${computerChoice}`
    }
}

const display = document.getElementById("gameDisplay");
let displayScore = document.createElement("span");
let displayWinner = document.createElement("span");

displayScore.setAttribute("class","score");
displayWinner.setAttribute("class","winner")

display.appendChild(displayScore).textContent = "";

document.getElementById("playRound").addEventListener("click", (e) => { 
    
     if (e.target.tagName === "BUTTON") {
        display.innerHTML += `<p>${playRound(e.target.outerText)}</p>`;
        display.appendChild(displayScore).innerHTML = `<p>The score is human: ${humanScore} - computer: ${computerScore}</p>`;
    }
    if (humanScore >= 5 || computerScore >= 5){ 
        if(humanScore >= 5 && humanScore > computerScore) display.appendChild(displayWinner).innerHTML =  "<p>Human wins!!! "+ `human: ${humanScore} - computer: ${computerScore}</p>`;
        if(computerScore >= 5 && computerScore > humanScore) display.appendChild(displayWinner).innerHTML = "<p>Computer wins!!! "+ `computer: ${computerScore} - human: ${humanScore}</p>`;
    }

});