console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
// Number constants
const initialNumber = 7;
const minNumber = 1;
const maxNumber = 10;

// Question
const question1 = "Enter a number between";
const question2 = "Would you  like to guess again (y/n)?";

// 
const congratsMsg = "Congratulations !!!";

let userWantsToContinue = true;
while (userWantsToContinue) {
    let guessedNumber = window.prompt(`${question1} ${minNumber} and ${maxNumber}`);
    if (guessedNumber < initialNumber) {
        let userChoice = window.prompt(`too low! ${question2}`);
        if (userChoice.toLowerCase() == "n") {
            userWantsToContinue = false;
        }
    }
    else if (guessedNumber > initialNumber) {
        let userChoice = window.prompt(`too high! ${question2}`);
        if (userChoice.toLowerCase() == "n") {
            userWantsToContinue = false;
        }
    }
    else {
        window.alert(`${congratsMsg}`);
        userWantsToContinue = false;
    }
}

// Exercise 2
// Topics
const topic1 = "coding";
const topic2 = "electronics";
const topic3 = "cars";
const topic4 = "computers";
const topic5 = "relaxing";
const topic6 = "Jesus";
const topic7 = "reading";
const topic8 = "math";
const topic9 = "science";

// Prompt question
const question = "Would you care to try more topics? (y/n)";

// Closing msg
const closingMsg = "Thanks for stopping by today!! Have a great day!!"
userWantsToContinue = true;
// Loop until the user does not want to choose any more topics.

// Initialize here so that it will be in the entire block of the while and switch statement
let userChoice;

while (userWantsToContinue) {
    let userPassions = window.prompt("What things are you passonate about?");
    switch (userPassions.toLowerCase()) {
        case topic1:
            userChoice = window.prompt(`You choose ${topic1}! ${question}`);
            console.log(`You choose ${topic1}! ${question}`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic2:
            userChoice = window.prompt(`You choose ${topic2}! ${question}`);
            console.log(`You choose ${topic2}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic3:
            userChoice = window.prompt(`You choose ${topic3}! ${question}`);
            console.log(`You choose ${topic3}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic4:
            userChoice = window.prompt(`You choose ${topic4}! ${question}`);
            console.log(`You choose ${topic4}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic5:
            userChoice = window.prompt(`You choose ${topic5}! ${question}`);
            console.log(`You choose ${topic5}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic6:
            userChoice = window.prompt(`You choose ${topic6}! ${question}`);
            console.log(`You choose ${topic6}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic7:
            userChoice = window.prompt(`You choose ${topic7}! ${question}`);
            console.log(`You choose ${topic7}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic8:
            userChoice = window.prompt(`You choose ${topic8}! ${question}`);
            console.log(`You choose ${topic8}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        case topic9:
            userChoice = window.prompt(`You choose ${topic9}! ${question}`);
            console.log(`You choose ${topic9}!`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;
        default:
            userChoice = window.prompt(`You choice was ${userPassions}. ${question}`);
            console.log(`Your choice was ${userPassions}`);
            if(userChoice.toLowerCase() == "n") {
                userWantsToContinue = false;
            }
            break;

    }
}
window.alert(`${closingMsg}`);