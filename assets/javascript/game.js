var wordChoice ="";
var letters =[];
var numberBlanks = 0;
var blanksSuccess =[];
var wrongGuess =[];

var winCount = 0;
var lossCount = 0;
var numGuess = 15

var words =[
    "black",
    "White",
    "Orange",
    "Green",
    "blue"
]

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

