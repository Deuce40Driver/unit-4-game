// VARIABLES
// ------------------------------------------------------------------------------------------------------

let targetValue;
let buttonValue;
let playerTotal = 0;
let choiceValue = 0;
let wins = 0;
let losses = 0;

// FUNCTIONS
// ------------------------------------------------------------------------------------------------------

// Set function to create random integers
getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Creates new target value between 19 and 120
getTargetValue = () => {
    targetValue = getRandomInteger(19, 121);
        console.log("Target value: " + targetValue);
    $("#target-value").text(targetValue);
}

// Creates new button value between 1 and 12
getButtonValue = () => {
    for (var i=0; i<=3; i++) {
        buttonValue = getRandomInteger(1, 13);
            console.log("Button " + [i+1] + ": " + buttonValue);
        $("#button" + [i]).val(buttonValue);
    }
}

// Compare players total to target value
checkScore = (playerTotal, targetValue) => {
    if (playerTotal < targetValue) {
        return;
    } else if (playerTotal === targetValue) {
        alertWinner();
    } else {
        alertLoser();
    }
}

// Adds the value of the clicked button to the players total score
updateScore = (btn) => {
    choiceValue = Number(btn.value);
    playerTotal = Number(playerTotal + choiceValue);
        console.log("New score: " + playerTotal);
    $("#player-total").text(playerTotal);
    checkScore(playerTotal, targetValue);
}

// Starts the game, initializes scoreboard, sets target value and each crystal value
startGame = () => {;
    playerTotal = 0;
    $("#player-total").text(playerTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#modal").hide();
    getTargetValue();
    getButtonValue();
}

// Opens a modal that alerts the player that they won the game
alertWinner = () => {
    $("#modal-message").text("Great Job!! You nailed the target score of " + targetValue + "!");
    for (var i=0; i<=3; i++) {
        buttonValue = $("#button" + [i]).val();
        $("#btn" + [i] + "Reveal").text(buttonValue);
    };
    $("#modal").show();
    wins++;
}

// Opens a modal that alerts the player that they lost the game
alertLoser = () => {
    $("#modal-message").text("Slow down there buddy! The target score was " + targetValue + ", but you scored " + playerTotal + "!");
    for (var i=0; i<=3; i++) {
        buttonValue = $("#button" + [i]).val();
        $("#btn" + [i] + "Reveal").text(buttonValue);
    };
    $("#modal").show();
    losses++;
}

// Main Game Code
// -------------------------------------------------------------------------------------------------------

$(document).ready(startGame());

