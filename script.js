f




function newPassword() {
    var passLength= prompt("How many characters would you like your password to contain?");
    if(passLength < 8) {
        alert('Password length must be at least 8 characters');
      }

var hasNumeric = confirm("Click OK to confirm including numeric characters.");
var hasLower = confirm("Click OK to confirm including Lower characters.");
var hasUpper = confirm("Click OK to confirm including Upper characters.");
var hasSpecial = confirm("Click OK to confirm including Special characters.");
  }

var userPassword = {
length: passLength,
hasNumeric: hasNumeric,
hasLower: hasLower,
hasUpper: hasUpper,
hasSpecial: hasSpecial,
}
return userPassword;

//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including Lower characters.");
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //;
  //}

  //object to store user input *****
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;

  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var Special = ["!",""", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{" ,"|", "}", "~"]
//   varAlphabet = [']
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screenif(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type')






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



















