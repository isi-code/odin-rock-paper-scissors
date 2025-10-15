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



