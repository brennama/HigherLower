//prompts the user for a maximum number.
let max_num = get_number('Enter the max number for the guessing range');

//validates the user input and does not allow invalid entries (negative numbers, 0, or non-numbers), re-prompting the user if an invalid entry is provided.
function get_number(prompt) {
  let valid_input = false;
  let max_num, input;

  while (!valid_input) {
    input = window.prompt(prompt);

    //if the user provides a decimal number, the application rounds it.
    max_num = Number(Math.floor(input));

    if (!isNaN(max_num) && max_num > 0) {
      valid_input = true;
    }
  }

  return max_num;
}

instructions.innerHTML = `Guess a number between 1 and ${max_num}. Decimals will be rounded down to the closest whole number`;

console.log(max_num);

//selects a random number between 1 and N (where N is the user-provided maximum number).
let num = Math.floor(Math.random() * max_num) + 1;

//initializes an array and uses the push() function to add the guesses.
let guesses = [];

function do_guess() {
  let guess = Math.floor(Number(document.getElementById('guess').value));

  let message = document.getElementById('message');

  if (guesses.includes(guess)) {
    message.innerHTML = 'That number has already been guessed, try again.';
    //checks the array for a guess first using any means (loop, find(), etc.) before adding a guess to the array and displays a message that a number has already been guessed.
  } else if (guess == num) {
    guesses.push(guess),
      (message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses}`);
    //formats the win message to include the comma-delimited guesses as part of the output and uses the length property and does not use an extra variable to count the number of guesses
  } else if (guess > max_num || guess <= 0) {
    message.innerHTML = 'That number is not in range, try again.';
    // prevents the user from guessing a number less than 1 or greater than N and displays an appropriate error message.
  } else if (guess > num && guess <= max_num) {
    (message.innerHTML = 'No, try a lower number.'), guesses.push(guess);
  } else if (guess < num) {
    (message.innerHTML = 'No, try a higher number.'), guesses.push(guess);
  } else {
    message.innerHTML = 'That is not a number!';
    //prevents the user from guessing a non-number and displays an appropriate error message.
  }
}
