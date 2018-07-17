window.onload = function(){

var wordList = [
    "black",
    "White",
    "Orange",
    "Green",
    "blue"
]
console.log(wordList);
var wordChoice = "";
var lettersWord = [];
var numberBlanks = 0;
var blanksSuccess = [];
var wrongGuess = [];

var winCount = 0;
var lossCount = 0;
var numGuess = 15

function gameStart(){

    wrongGuess = [];
    numGuess =15;
    blanksSuccess = [];
    
    wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
    lettersWord = wordChoice.split("");
    numberBlanks = lettersWord.length;


    for(var i = 0; i < numberBlanks; i++){
        blanksSuccess.push(" _ ");
    }
    document.getElementById(".wordBlanks").innerHTML =  blanksSuccess.join("numberBlanks");
    document.getElementById("#guessesLeft").innerHTML = numGuess;
    
}

function letterChecker(letter){

    var lettersWord = false;

    for(var  i = 0; i < numberBlanks; i++){
        if(wordChoice[i] === letter){
            lettersWord = true;
        }
    }

    if(lettersWord){
        for(var  i = 0; i < numberBlanks; i++){
            if(wordChoice[i] === letter){
                blanksSuccess[i] = letter;
            }
        }   
        
    } else {
        numGuess --;
        wrongGuess.push(letter)
    }
}

function gameEnd(){

    document.getElementById(".wordBlanks").innerHTML = blanksSuccess.join(" ");
    document.getElementById("#guessesLeft").innerHTML = numGuess;
    document.getElementById("#wrongGuesses").innerHTML = wrongGuess.join("")

    if(lettersWord.join(" ") === blanksSuccess.join(" ")){
        winCount++;
        alert("You've Won!!");
        document.getElementById("#winCount").innerHTML = winCounter;
        gameStart();

    } else if (numGuess === 0){
        document.getElementById("#lossCounter").innerHTML = lossCount;
        document.getElementById("#wrongGuesses").innerHTML = "";
        alert("Out of Guesses! Try again!");
        gameStart();
    }
}

gameStart();

    document.onkeyup = function(event){

        var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
        letterChecker(guessedLetter)
        gameEnd();
    }
}