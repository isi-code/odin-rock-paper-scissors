const humanScore = 0 
const computerScore = 0

const options = {"rock":'🪨', "paper":'📃', "scissors" :'✂️'}
const stopPlaying = false

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


