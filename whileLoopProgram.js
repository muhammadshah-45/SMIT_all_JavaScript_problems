console.log("While loop");


// var randomNumbers = Math.ceil(Math.random() * 5);


// play = 1;
// console.log("play before",play);
// while (play) {
//    var guessNumber = +prompt("Guess the Number");
//    if(randomNumbers === guessNumber){
//       alert("Hurrah You got it")
//       console.log(randomNumbers);
//    }else{
//       alert("try it next time",randomNumbers)
//       console.log("randomNumbers",randomNumbers);
//    }
//    var play = +prompt("Do you want to continue? \n 1:Yes \n 0:No")
//    console.log("play after",play);
//      if(!play){
//         break;
//      }
// }

// EXAMPLE PROGRAMS
// GUESS THE NUMBER GAME
var playAgain = +prompt("Khelna chah rhe ho?\n0. 'No' \n1.'Yes'")

while (playAgain) {
    var randomNumber = Math.ceil(Math.random() * 3)
    var userGuess = +prompt("Guess the number: ")

    if (userGuess === randomNumber) {
        alert("You got it right")
    } else {
        alert("Try again!")
    }
    playAgain = +prompt("Dobara Khelna chah rhe ho?\n0. 'No' \n1.'Yes'")
}

console.log(randomNumber)