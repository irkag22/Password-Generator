var generateBtn = document.querySelector("#generate")

function genPass() {
  let len = prompt('How long would you like your password to be (between 8-128 characters)?');

  if(len<8 || len>128 || isNaN(len)) {
    alert('Incorrect length or input. Please try again.');
    return genPass();
  }; 

  let num = confirm('Click OK to confirm if you want the password to contain numbers?');
  let uppCase = confirm('Click OK to confirm if you want the password to contain upper case letters?');
  let lowCase = confirm('Click OK to confirm if you want the password to contain lower case letters?');
  let speChar = confirm('Click OK to confirm if you want the password to contain characters?');

  let tempPass = '';
  if(speChar) tempPass += '!~#$%^&*()_-+=?|';
  if(uppCase) tempPass += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(lowCase) tempPass += 'abcdefghijklmnopqrstuvwxyz';
  if(num) tempPass += '1234567890';

  let passwd = '';
  for(let i=0; i<len; i++) {
    passwd += tempPass[Math.floor(Math.random()*tempPass.length)];
  }

  document.querySelector('textarea').innerText = passwd;
  console.log(tempPass);
};

generateBtn.addEventListener("click", genPass)
// document.onclick = genPass;








































  // if(len>128) {
  //   alert('Incorrect length.  Please try again.');
  //   return genPass();
  // }


// ____________________________________________________________________________________________________________________________________
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

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
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
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// math.random() - will choose random item from array
//  also use math.floor()
// google this with MDN and W3 school, make sure it's a complete number
// // google things the same way you have it in your head
// ALERT will display message on page
// do textContent tag 