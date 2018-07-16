var words =[
    "black",
    "White",
    "Orange",
    "Green",
    "blue"
]

var wordChoice = "";
var letters = [];
var numberBlanks = 0;
var blanksSuccess = [];
var wrongGuess = [];

var winCount = 0;
var lossCount = 0;
var numGuess = 15

function gameStart(){

    blanksSuccess = [];
    wrongGuess = [];
    numGuess =15;
    
    wordChoice = words[Math.floor(Math.random() * words.length)];
    letters = wordChoice.split("");
    numberBlanks = letters.length;

    for(var i = 0; i < numberBlanks; i++){
        blanksSuccess.push("_");

    document.getElementById("wordBlank").innerHTML =  blanksSuccess.join("");
    document.getElementById("guessesLeft").innerHTML = numGuess;
    }
}

function letterChecker(letters){

    var letters = false;

    for(var  i = 0; i < numberBlanks; i++){
        if(wordChoice[i] === letters){
            letters = true;
        }
    }

    if(lettersInWord){
        for(var  i = 0; i < numberBlanks; i++){
            if(wordChoice[i] === letters){
                blanksSuccess[i] = letters;
            }
        }   
        
    } else {
        numGuess --;
        wrongGuess.push(letters)
    }
}

function gameEnd(){

    document.getElementById("wordBlank").innerHTML = blanksSuccess;
    document.getElementById("guessesLeft").innerHTML = numGuess;
    document.getElementById("wrongGuesses").innerHTML = wrongGuess;

    if(lettersInWord.join("") === blanksSuccess.join("")){
        winCount++;
        alert("You've Won!!");
        document.getElementById("winCount").innerHTML = winCounter;
        gameStart();

    } else if (numGuess){
        document.getElementById("lossCounter").innerHTML = lossCount;
        document.getElementById("wrongGuesses").innerHTML = "";
        alert("Out of Guesses! Try again!");
        gameStart();
    }
}

gameStart();

    document.onkeyup = function(event){

        var guessedLetter = String.fromCharCode(event.key).toLowerCase();
        letterChecker(guessedLetter)
        gameEnd();
    }

