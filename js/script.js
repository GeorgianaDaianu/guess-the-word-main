//Global Variables
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const guessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

//Test word
let word = "magnolia";
const guessedLetters = [];

//inserting placeholders
const placeholder = function (word) {
   const placeholderLetters = [];

   for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
   }
   wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
   e.preventDefault();
   message.innerText = "";
   const guess = letterInput.value;
   const goodGuess = validateInput(guess);

   if (goodGuess) {
    makeGuess(guess);
   }
   letterInput.value = "";
});

const validateInput = function (input) {
   const acceptedLetter = /[a-zA-Z]/;
   if (input.lenght === 0) {
      message.innerText = "Please enter a letter.";
   } else if (input.lenght > 1) {
      message.innerText = "Please enter a single letter.";
   } else if (!input.match(acceptedLetter)) {
      message.innerText = "Please enter a letter from A to Z.";
   } else {
      return input;
   }
};

const makeGuess = function (guess) {
   guess = guess.toUpperCase();
   if(guessedLetters.includes(guess)) { 
      message.innerText = "You already guessed that letter! Try again."
   }else {
      guessedLetters.push(guess);
      console.log(guessedLetters);
   }
};