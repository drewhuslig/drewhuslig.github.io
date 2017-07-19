var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ,'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;

var compGuess = letters[Math.floor(Math.random() * (26) + 1)];

document.onkeyup = function(event){

    userGuess = event.key;
    userGuess = userGuess.toLowerCase();

    if(userGuess === compGuess){
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        guesses = 9;
        document.getElementById('gLeft').innerHTML = "Guesses left: 9";
        document.getElementById('guesses').innerHTML = "Your guesses so far: ";
        document.getElementById('result').innerHTML = "Congrats! The letter was '" + compGuess + "'";
        compGuess = letters[Math.floor(Math.random() * (26) + 1)];
    }else if(guesses == 1){
        losses++;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        guesses = 9;
        document.getElementById('gLeft').innerHTML = "Guesses left: 9";
        document.getElementById('guesses').innerHTML = "Your guesses so far: ";
        document.getElementById('result').innerHTML = "Sorry! The letter was '" + compGuess + "'";
        compGuess = letters[Math.floor(Math.random() * (26) + 1)];
    }else{
        guesses--;
        document.getElementById('gLeft').innerHTML = "Guesses left: " + guesses;
        document.getElementById('guesses').innerHTML += userGuess + " ";
        document.getElementById('result').innerHTML = "";
    }
    
};