var success = 0
var fail = 0
var guessesRemaining = 10

var infoText = document.getElementById("info");
var winText = document.getElementById("wins");
var loseText = document.getElementById("losses");
var lifeText = document.getElementById("guessesLeft");
var guessText = document.getElementById("guessesMade");

setInterval(function() {
    $("#guessesLeft" && "#guessesMade").load(location.href+" #reloadContent>*","");
    }, 200000);


    document.onkeyup = function(event) {
    if (guessesRemaining > 0) { 
        var userGuess = event.key
        var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var computer = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        
        if (parseInt(userGuess) === computerGuess) {
            success++
            guessesRemaining = 10
        }
        else {
            guessesRemaining--
        }
        
        winText.textContent = "Wins: " + success
        loseText.textContent = "Losses: " + fail
        infoText.textContent = "Guess what letter I'm thinking of!"
        lifeText.textContent = "Guesses Remaining: " + guessesRemaining
        guessText.textContent = "Letters you have guessed: " + userGuess + ","
    } else {
        fail++
        guessesRemaining = 10  
    }

    
} 




