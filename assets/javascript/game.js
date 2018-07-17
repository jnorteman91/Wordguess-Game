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

    var winCounter = 0;
    var lossCounter = 0;
    var numGuess = 15

    function gameStart(){
        wrongGuess = [];
        console.log(wrongGuess);
        
        numGuess = 15;
        blanksSuccess = [];

        wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
        lettersWord = wordChoice.split("");
        numberBlanks = lettersWord.length;
        console.log(wordChoice);
        console.log(numberBlanks)

        for(var i = 0; i < numberBlanks; i++){
            blanksSuccess.push("_");
        }
        console.log(blanksSuccess);

        document.getElementById('wordBlanks').innerHTML = blanksSuccess.join("");
        document.getElementById('guessesLeft').innerHTML = numGuess;
    }

    
}
