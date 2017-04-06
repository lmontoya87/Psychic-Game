 // <script type="text/javascript">
    //Creates variables to hold the number of wins, losses, guesses left & guesses so far
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var guessesSoFar = "";

    var alphabet = "abcdefghijklmnopqrstuvwxyz";

 
    //Creates an array that lists all letters of the alphabet
    var computerGuess = alphabet.split("");

    //Computer randomly chooses a letter from the options array. 
    var letterSelection = computerGuess[Math.floor(Math.random() * computerGuess.length)];
console.log(letterSelection);


    //This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      

        //Determines which key was pressed
        var userGuess = event.key;
   
        //When user guesses the correct letter the computer selected.
        if (userGuess === letterSelection) {
          wins++;
          document.getElementById("wins").children[0].innerHTML = wins;
          guessesSoFar = ""
          document.getElementById("guessesSoFar").children[0].innerHTML = guessesSoFar;

          computerGuess = alphabet.split("");
          letterSelection = computerGuess[Math.floor(Math.random() * computerGuess.length)];
console.log(letterSelection);
          guessesLeft = 5;
          guessesSoFar = "";
          document.getElementById("guessesSoFar").children[0].innerHTML = guessesSoFar; 
          document.getElementById("guessesLeft").children[0].innerHTML = 5;

        }

        //When user guesses an incorrect letter the computer selected.
        else { 
          guessesLeft--;
          document.getElementById("guessesLeft").children[0].innerHTML = guessesLeft;
          var guessedField = document.getElementById("guessesSoFar").children[0]; 
          guessesSoFar = guessesSoFar + userGuess + ", ";
          guessedField.innerHTML = guessesSoFar;

            //When user does not guess the correct letter within the allowed number of tries.
            if (guessesLeft === 0) {
              losses++;
              document.getElementById("losses").children[0].innerHTML = losses;
              guessesLeft = 5;
              guessesSoFar = "";
              document.getElementById("guessesSoFar").children[0].innerHTML = guessesSoFar; 
              document.getElementById("guessesLeft").children[0].innerHTML = 5;
            }
        } 

    };
  

  // </script>