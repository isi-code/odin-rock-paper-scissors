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
document.getElementById("playRound").addEventListener("click", (e) => { 
    display.appendChild(document.createElement("span.score"))
     if (e.target.tagName === "BUTTON") {
        display.innerHTML += `<span>${playRound(e.target.outerText)}</span><br>`;
    }
})