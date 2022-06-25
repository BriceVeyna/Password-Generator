// Global arrays
var randomPassword = [];
var trueCharacterTypes = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Global password length, character type inclusion variables
var passwordLength = 0;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumeric = false;
var includeSpecialCharacter = false;

// function prompts user for total length of password, alerts them if they enter an invalid value and prompts them again
function getLength() {

  passwordLength = parseInt(prompt("Length of password (8 - 128): "));
  var passwordLengthType = typeof passwordLength;

  // check that the password length is a number and a value between 8 and 128
  if (passwordLengthType !== "number") {
    alert("Password length must be a number");
    passwordLengthString = parseInt(prompt("Length of password (8 - 128): "));
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128");
    passwordLength = parseInt(prompt("Length of password (8 - 128): "));
  } else {
    getCharacterTypes();
    console.log("Password length is valid.");
  }
}

// function confirms character types to include (lower case, upper case, numeric, special character), alerts user if no type was selected and prompts them again
function getCharacterTypes() {

  // confirm character type, add to trueCharacterTypes array if selected
  includeLowerCase = confirm("Include lower case letters?");
  if (includeLowerCase === true) {
    trueCharacterTypes.push(lowerCase);
  }
  console.log("Lower case: ", includeLowerCase);

  includeUpperCase = confirm("Include upper case letters?");
  if (includeUpperCase === true) {
    trueCharacterTypes.push(upperCase);
  }
  console.log("Upper case: ", includeUpperCase);

  includeNumeric = confirm("Include numbers?");
  if (includeNumeric === true) {
    trueCharacterTypes.push(numeric);
  }
  console.log("Numeric: ", includeNumeric);

  includeSpecialCharacter = confirm("Include special characters?");
  if (includeSpecialCharacter === true) {
    trueCharacterTypes.push(specialCharacter);
  }
  console.log("Special character: ", includeSpecialCharacter);

  // check that at least one character type was selected, if not restart function
  if (includeLowerCase === false && includeUpperCase === false && includeNumeric === false && includeSpecialCharacter === false) {
      alert("Password must include at least 1 type of character");
      getCharacterTypes();
  } else {
      generatePassword();
      console.log(trueCharacterTypes);
  }
}


// generate password
function generatePassword() {

  // random number generator for type of character
  var randomCharacterNumber = Math.floor(Math.random() * trueCharacterTypes.length);
  console.log(randomCharacterNumber);
  var randomCharacterType = trueCharacterTypes[randomCharacterNumber];
  console.log(randomCharacterType);

  //random number generator for position within respective array
  for (var i = 0; i < passwordLength; i++) {
    if (randomCharacterType === lowerCase) {
      Math.floor(Math.random() * lowerCase.length);
    } else if (randomCharacterTyp === upperCase) {
      Math.floor(Math.random() * upperCase.length);
    } else if (randomCharacterTyp === numeric) {
      Math.floor(Math.random() * numeric.length);
    } else {
      Math.floor(Math.random() * specialCharacter.length);
    }
    
    randomPassword.push();

    console.log(randomPassword.join("+"));
  }

}

// display password (alert or written to page)
function displayPassword() {
  alert("Password:" + randomPassword)
}


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