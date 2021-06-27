console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
const initialNumber = 7;
const minNumber = 1;
const maxNumber = 10;
let userWantsToContinue = true;
while (userWantsToContinue) {
    let guessedNumber = window.prompt(`Enter a number betweeen ${minNumber} and ${maxNumber}`);
    if (guessedNumber < initialNumber) {
        let userChoice = window.prompt("too low! Would you like to guess again (y/n)?");
        if(userChoice.toLowerCase() == "n") {
            userWantsToContinue = false;
        }
    }
    else if (guessedNumber > initialNumber) {
        let userChoice = window.prompt("too high! Would you like to guess again (y/n)?");
        if(userChoice.toLowerCase() == "n") {
            userWantsToContinue = false;
        }
    }
    else {
        window.alert("Congratulations!!!");
        userWantsToContinue = false;
    }
}

// Exercise 2
const topic1 = "coding";
const topic2 = "electronics";
const topic3 = "cars";
const topic4 = "computers";
const topic5 = "relaxing";

let userPassions = window.prompt("What things are you passonate about?");
switch(userPassions.toLowerCase()) {
    case topic1:
        window.alert(`You choose ${topic1}!`);
        console.log(`You choose ${topic1}!`);
        break;
    case topic2:
        window.alert(`You choose ${topic2}!`);
        console.log(`You choose ${topic2}!`);
        break;
    case topic3:
        window.alert(`You choose ${topic3}!`);
        console.log(`You choose ${topic3}!`);
        break;
    case topic4:
        window.alert(`You choose ${topic4}!`);
        console.log(`You choose ${topic4}!`);
        break;
    case topic5:
        window.alert(`You choose ${topic5}!`);
        console.log(`You choose ${topic5}!`);
        break;
    default:
        window.alert(`You choice was ${userPassions}`);
        console.log(`Your choice was ${userPassions}`);
        break;

}