function newPassword() {
    var passLength= prompt("How many characters would you like your password to contain? Length must be between 8 and 129 characters");
    var compOptions = ['R', "P", "S"];

var userPassword = {
length: passwordLength,
hasNumeric: hasNumeric,
hasLower: hasLower,
hasUpper: hasUpper,
hasSpecial: hasSpecial,
}
  return userPassword;

// //     function startGame() {
//     var userInput = prompt("Please enter R, P or S").toUpperCase();
//     var compOptions = ['R', "P", "S"];

//     // console.log(userInput.toUpperCase());
//     // console.log(userInput);
//     if ((userInput === "R") || (userInput === "P") || (userInput === "S")) {
//         console.log("play");
//         var compPick = compOptions[Math.floor(Math.random() * compOptions.length)];
//         console.log("compPick", compPick);

//         if (userInput === compPick) {
//             // ties = ties + 1;
//             ties++;
//         } else if ((userInput === "P" && compPick === "R") || (userInput === "S" && compPick === "P") || (userInput === "R" && compPick === "S")) {
//              // wins = wins + 1;
//             wins++;
//         } else {
//              // losses = losses + 1;
//             losses++;
//         }
//         alert("wins" + wins + " losses " + losses + " ties " + ties);

//         var playAgain = confirm("Do you want to play again?");
//          if(playAgain){
//             startGame();
//          }else{
//             document.getElementById("text").textContent = "Thank you for playing!"
//             return;
//          }

//     } else {
//         alert("Please enter R, P or S");
//     }
// }

// startGame();



















