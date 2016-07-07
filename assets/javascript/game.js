

// Sets the computer choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Declares the tallies to 0
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	// This sets the computer guess equal to the random.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	console.log(computerGuess);
	// Making sure the user chooses r, p, or s

		// It tests to determine if the computer or the user won the round and then increments
		if (userGuess == computerGuess) {
			guessesLeft--;
			guessesSoFar(userGuess);
			wins++;
		} else {
			losses++;
		}

		for (i=0; i < 1; i++) {
			guessesSoFar.push(userGuess);
		}

		console.log(wins);
		console.log(losses);
		console.log(guessesSoFar)
		console.log(guessesLeft);

		// Taking the tallies and displaying them in HTML
		var html =
		"<h1>Psychic Game</h1>" 
		"<p>Guess what letter I'm thinking of..."
		"<p>Press any key to start playing.</p>" +
		"<p>Wins: " +
		wins +
		"</p>" +
		"<p>Losses: " +
		losses +
		"</p>" +
		"<p>Guesses Remaining: " +
		guessesLeft +
		"</p>"
		"<p> Letters Guessed: " + guessesSoFar + "</p>";

		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html;

	}
		//} elif (guessesLeft > 9) { 
		//	alert("You suck!");
		//}
	//if ((userGuess = computerGuess) && (guessesLeft < 9)) {
	//		wins++;
	//	} else {
	//		losses++;
	//	}