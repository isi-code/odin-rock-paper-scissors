let humanScore = 0 
let computerScore = 0

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

function getHumanChoice(){
    const choice = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
    try{
        switch(choice){
            case "rock":
                return options.rock
            case "paper":
                return options.paper
            case "scissors":
                return options.scissors
            default:
                throw new Error(`${choice} is an invalid input`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "It's a draw"
    }
    else if (winConditions[humanChoice][computerChoice]){
        humanScore++
        return `Point for human! - Human:${humanChoice} X Computer:${computerChoice}`
    }else{
        computerScore++
        return `Point for Computer! - Human: ${humanChoice} X Computer:${computerChoice}`
    }
}

while(!stopPlaying){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
    
    if( humanScore >= 5 || computerScore >= 5) stopPlaying = true;
}

if (humanScore > computerScore) console.log("Human Won!!")
else console.log("Computer Won!!")