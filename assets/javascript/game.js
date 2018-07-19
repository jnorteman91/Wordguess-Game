window.onload = function(){

    var wordList = ["black", "white", "orange", "green", "blue", "purple", "red"]
    
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

    function checkLetters(letterGuess){

        var letterWord = false;
// somthing is wrong around this area not sure what, as it will not display the first letter of the word unless the word is blue or black and displays false under the condition of a wrong letter.
        for(var i = 0; i < numberBlanks; i++){
            if(wordChoice[i] === letterGuess){
                letterWord = true;
            }
        }

        if(letterWord){
            for(i = 0; i < numberBlanks; i++){
                if(wordChoice[i] === letterGuess){
                    blanksSuccess[i] = letterGuess;
                }
            }
            
        }else{
            numGuess --;
            wrongGuess.push(letterGuess)   
          
        }
    }

    function endGame(){

        document.getElementById('wordBlanks').innerHTML = blanksSuccess.join(" ");
        document.getElementById('guessesLeft').innerHTML = numGuess;
        document.getElementById('wrongGuesses').innerHTML = wrongGuess.join(" ");

        if
            (lettersWord.join(" ") === blanksSuccess.join(" ")){
            winCount++;
            alert("You've won the game!!")
            document.getElementById('winCounter').innerHTML = winCount;
            gameStart();
        
        }else if(numGuess === 0){
            
            document.getElementById('lossCounter').innerHTML = lossCount++;
            document.getElementById('wrongGuesses').innerHTML = "";
            alert("You are out of guesses. Try again!");
            gameStart();

        }
    }

    gameStart();
    this.document.onkeyup = function(event){

        var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuess);
        endGame();
        
    }
}
