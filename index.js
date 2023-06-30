function getComputerChoice() {
    let choice = getRandomInt(1,3); 
    if (choice == 1) {
        console.log("rock");
        alert("rock");
        return "Rock";
    } else if (choice == 2) {
        console.log("paper");
        alert("paper");
        return "Paper";
    } else if (choice == 3) {
        console.log("scissor");
        alert("scissor");
        return "Scissor";
    } else {
        alert("simething went wroint");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




let yourWins = 0;
let compWins = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        compWins+= 1;
        console.log("1");
    } else if (playerSelection = "Paper" && computerSelection == "Rock") {
        yourWins+= 1;
        console.log("2");
    } if (playerSelection == "Rock" && computerSelection == "Scissor") {
        yourWins+= 1;
        console.log("3");
    } else if (playerSelection = "Scissor" && computerSelection == "Rock") {
        compWins+= 1;
        console.log("4");
    } if (playerSelection == "Scissor" && computerSelection == "Paper") {
        yourWins+= 1;
        console.log("5");
    } else if (playerSelection = "Paper" && computerSelection == "Scissor") {
        compWins+= 1;
        console.log("6");
    } else if (playerSelection === computerSelection) {
        console.log("7");
    }

}

// function game() {
//     for (let i = 0; i <5; i++) {
//         // let playerSelection = prompt("What is your choice", "");
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection,computerSelection))
//         console.log(playerSelection)
//     }
//     console.log("you won " + yourWins + " times. Computer won " + compWins + " times." )
// }

function rock() {
    playRound("Rock", getComputerChoice());
    checkWin();
}

function paper() {
    playRound("Paper", getComputerChoice());
    checkWin();
}

function scissor() {
    playRound("Scissor", getComputerChoice());
    checkWin();
}

function checkWin() {
    if (compWins >= 3) {
        alert("Computer wins");
    } else if (yourWins >= 3) {
        alert ("you win");
    }
}
