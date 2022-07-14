// Global arrays
var randomPassword = [];
var trueCharacterTypes = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Global password length, character type inclusion variables
var passwordLength;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumeric = false;
var includeSpecialCharacter = false;

// Function prompts user for total length of password, alerts them if they enter an invalid value and prompts them again.
function getLength() {

  passwordLength = prompt("Length of password (8 - 128): ");
  console.log(passwordLength);

  // Check that the password length is a number and a value between 8 and 128. If it is, initialize getCharacterTypes function; if not, alert user and start function over.
  if (isNaN(passwordLength)) {
    console.log("Password length is invalid.");
    alert("Password length must be a number");
    getLength();
  } else if (passwordLength < 8 || passwordLength > 128) {
    console.log("Password length is invalid.");
    alert("Password length must be between 8 and 128");
    getLength();
  } else {
    console.log("Password length is valid.");
    getCharacterTypes();
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

  //random number generator for position within respective array
  var randomCharacterNumber = 0;
  var randomCharacter = 0;
  
  for (var i = 0; i < passwordLength; i++) {

    // random number generator for type of character
    var randomCharacterTypeNumber = Math.floor(Math.random() * trueCharacterTypes.length);
    console.log(randomCharacterTypeNumber);
    var randomCharacterType = trueCharacterTypes[randomCharacterTypeNumber];
    console.log(randomCharacterType);

    if (randomCharacterType === lowerCase) {
      randomCharacterNumber = Math.floor(Math.random() * lowerCase.length);
      randomCharacter = lowerCase[randomCharacterNumber];
      randomPassword.push(randomCharacter);
      console.log(randomCharacter);
    } else if (randomCharacterType === upperCase) {
      randomCharacterNumber = Math.floor(Math.random() * upperCase.length);
      randomCharacter = upperCase[randomCharacterNumber];
      randomPassword.push(randomCharacter);
      console.log(randomCharacter);
    } else if (randomCharacterType === numeric) {
      randomCharacterNumber = Math.floor(Math.random() * numeric.length);
      randomCharacter = numeric[randomCharacterNumber];
      randomPassword.push(randomCharacter);
      console.log(randomCharacter);
    } else {
      randomCharacterNumber = Math.floor(Math.random() * specialCharacter.length);
      randomCharacter = specialCharacter[randomCharacterNumber];
      randomPassword.push(randomCharacter);
      console.log(randomCharacter);
    }

  }

  // displayPassword();
  writePassword();

}

// display password (alert or written to page)
function displayPassword() {
  var stringPassword = randomPassword.join("");

  alert("Password:" + stringPassword);
}

// Write password to the #password input
function writePassword() {
  var password = randomPassword.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", getLength);