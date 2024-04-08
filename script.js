// Computer Generates a Random Number
var ai = Math.round(Math.random() * 100);
//document.write(ai);

let attempts = 0;

function checkingValue() {
  // convert (user input value) into number
  const userInput = parseInt(document.getElementById("userValue").value);

  // feedback send by computer - container for display
  const feedback = document.getElementById("feedbackContainer");
  const message = document.getElementById("message");

  // validate user value
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    message.textContent =
      "Can You Please !! Enter a valid number between 1 and 100.";
    message.classList.add("text-red-500", "text-4xl");
    document.getElementById("userValue").value = "";
    return;
  }

  attempts++;

  if (userInput == ai) {
    message.innerHTML = `<div class="flex justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-emoji-smile h-8 w-8 fill-green-500 stroke-2" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg><svg xmlns="http://www.w3.org/2000/svg"class="bi bi-emoji-sunglasses ml-2.5 h-8 w-8 fill-green-500 stroke-2" viewBox="0 0 16 16"><path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
                </svg></div> 
                Congratulations!! You guessed the number ${ai} in ${attempts} attempts. Keep it Up!`;

    message.classList.add("text-green-500");
    message.classList.remove("text-4xl");
    feedback.classList.add("bg-green-100");
    feedback.classList.remove("bg-orange-100");
  } else {
    const hint = userInput < ai ? "GREATER>>" : "LESSER<<"; // give hint for correct guess with the help of ternary operators

    message.innerHTML = `The AI Generated Random Number is <u>${hint} Than Your Guess.</u> <br> TRY AGAIN !!`;

    message.classList.add("text-orange-500");
    message.classList.remove("text-4xl");
    feedback.classList.add("bg-orange-100");

    document.getElementById("userValue").value = "";
  }
}

// define range in advance
/*
      function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
        // Calculate the range of values (inclusive)
        const min = Math.ceil(rangeStart); // ceil return greater value than the given number
        const max = Math.floor(rangeEnd);  // ceil return greater value than the given number

        // Generate a random number within the specified range
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        return randomNum;
      }

      console.log(`My random number: ${randomNumberGeneratorInRange(10, 50)}`);
*/
