let answer = 5;

let guessNumber = prompt("Guess a number: ");
let guess = Number(guessNumber);

if (guess === answer) {
    alert("Perfect you guess right!!!");
}

else if ( guess > answer) {
    alert("You guess too high, try it again.")
}

else {
    alert("You guess too low, try it again.")
}