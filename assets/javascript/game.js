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

    function letterchecker(lettersWord){

        var lettersWord = false;

        for(var i = 0; i < numberBlanks; i++){
            if(wordChoice[i] === lettersWord){
                lettersWord = true;
            }
        }

        if(lettersWord){
            for(i = 0; i < numberBlanks; i++){
                if(wordChoice[i] === lettersWord){
                    blanksSuccess[i] = lettersWord;
                }
            }
            
        }else{
            numGuess --;
            wrongGuess.push(lettersWord)   
          
        }
    }

    function endGame(){

        document.getElementById('wordBlanks').innerHTML = blanksSuccess.join(" ");
        document.getElementById('guessesLeft').innerHTML = numGuess;
        document.getElementById('wrongGuesses').innerHTML = wrongGuess.join(" ");

        
    }
}
