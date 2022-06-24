// Assignment code here
var passwordCharacter = {
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacter: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
};

// function prompts user for total length of password, alerts them if they enter an invalid value and prompts them again
function getLength() {

  var passwordLengthString = prompt("Length of password (8 - 128): ");
  var passwordLengthNumber = parseInt(passwordLengthString);
  var passwordLengthType = typeof(passwordLengthNumber);

  // check that the password length is a number and a value between 8 and 128
  if (passwordLenghtType !== "number") {
    alert("Password length must be a number");
    passwordLengthString;
  } else if (passwordLengthNumber <= 8 || passwordLengthNumber >= 128) {
    alert("Password length must be between 8 and 128");
    passwordLengthString;
  } else {
    getCharacterTypes();
  }
}

// function confirms character types to include (lower case, upper case, numeric, special character), alerts user if no type was selected and prompts them again
function getCharacterTypes() {

  var includeLowerCase = confirm("Include lower case letters?");
  var includeUpperCase = confirm("Include upper case letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecialCharacter = confirm("Include special characters?")?

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

// confirm choice of password length and character types (at least one)

prompt("You have selected a password length of " + passwordLength + );
// generate password
function generatePassword() {

}
// display password (alert or written to page)




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
