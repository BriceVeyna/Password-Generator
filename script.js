// Global arrays
var randomPassword = [];
var trueCharacterTypes = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Global password length, character type inclusion variables
var passwordLengthNumber = 0;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumeric = false;
var includeSpecialCharacter = false;

// function prompts user for total length of password, alerts them if they enter an invalid value and prompts them again
function getLength() {

  var passwordLength = parseInt(prompt("Length of password (8 - 128): "));
  var passwordLengthType = typeof passwordLength;

  // check that the password length is a number and a value between 8 and 128
  if (passwordLengthType !== "number") {
    alert("Password length must be a number");
    passwordLengthString = prompt("Length of password (8 - 128): ");
    passwordLengthNumber = parseInt(passwordLengthString);
  } else if (passwordLengthNumber < 8 || passwordLengthNumber > 128) {
    alert("Password length must be between 8 and 128");
    passwordLengthString = prompt("Length of password (8 - 128): ");
    passwordLengthNumber = parseInt(passwordLengthString);
  } else {
    getCharacterTypes();
  }
}

// function confirms character types to include (lower case, upper case, numeric, special character), alerts user if no type was selected and prompts them again
function getCharacterTypes() {

  includeLowerCase = confirm("Include lower case letters?");
  includeUpperCase = confirm("Include upper case letters?");
  includeNumeric = confirm("Include numbers?");
  includeSpecialCharacter = confirm("Include special characters?");

  // check that at least one character type was selected
  if (includeLowerCase === false && includeUpperCase === false && includeNumeric === false && includeSpecialCharacter === false) {
      alert("Password must include at least 1 type of character");
      includeLowerCase;
      includeUpperCase;
      includeNumeric;
      includeSpecialCharacter;
  } else {
      generatePassword();
  }
}


// generate password
function generatePassword() {

  // random number generator for type of character
  if (includeLowerCase === true) {
    trueCharacterTypes.push(lowerCase);
  }
  if (includeUpperCase === true) {
    trueCharacterTypes.push(upperCase);
  }
  if (includeNumeric === true) {
    trueCharacterTypes.push(numeric);
  }
  if (includeSpecialCharacter === true) {
    trueCharacterTypes.push(specialCharacter);
  }

  var randomCharacter = Math.floor(Math.random() * trueCharacterTypes.length-1);

  var characterType = trueCharacterTypes.toString(randomCharacter);

  //random number generator for position within respective array
  if (characterType === lowerCase) {
    Math.floor(Math.random() * lowerCase.length);
  } else if (characterType === upperCase) {
    Math.floor(Math.random() * upperCase.length);
  } else if (characterType === numeric) {
    Math.floor(Math.random() * numeric.length);
  } else {
    Math.floor(Math.random() * specialCharacter.length);
  }

}


// display password (alert or written to page)
alert("Password:" + randomPassword)



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start program
getLength();