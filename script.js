       //declaring values to be used in functions.
        var randomNo;
        var guess;
        var previousGuesses = [];
        var attempts = 10;
       //Function for new game, which reloads screen.
        newGame = () => {
        window.location.reload();
        }

        //Random number generator between 1-100.
        randomNumber = () => {
            randomNo = Math.floor(Math.random()*100 + 1);
        }

        //Checks user input.
        compareGuess = () => {
            guess = document.getElementById('input').value;
            const regex = /[0-9]/;

            //pushes user input to guess log.
            previousGuesses.push(" " + guess); 
            document.getElementById("guesslog").innerHTML = previousGuesses;

            //reduces attempts by 1 for every guess.
            attempts--;
            document.getElementById('remain').innerHTML = attempts;
            
            //response to each type of user input.
            if (guess == randomNo) {
                document.getElementById('answer').innerHTML = "Correct!";
                endGame();
            } else if (!guess.match(regex)) {
                document.getElementById('answer').innerHTML = "Please choose a number, not a letter!";
                document.getElementById('input').value = "";
                attempts++; //prevents user attempt log from reducing.
                document.getElementById('remain').innerHTML = attempts;
                previousGuesses.pop(); //ensures word characters are not pushed to guesslog.
                document.getElementById("guesslog").innerHTML = previousGuesses;
            } else if (guess < randomNo && attempts > 0) {
                document.getElementById('answer').innerHTML = "You have guessed too low!"
                document.getElementById('input').value = "";
            } else if (guess > randomNo && attempts > 0) {
                document.getElementById('answer').innerHTML = "You have guessed too high!"
                document.getElementById('input').value = "";
            } else if (attempts == 0) {
                document.getElementById('answer').innerHTML = "YOU LOSE!"
                endGame();
            }
        };
        
        //ensures user cannot enter any more values, as the game as come to an end.
        endGame = () => {
            document.getElementById('input').style.display = 'none';
        }
