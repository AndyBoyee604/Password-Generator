// Assignment code here
var characterLength = 8;
var choiceArr = [];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharArr = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '<', '>'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

//added func generatpassword
function generatePassword() {
  var password = '';
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt('How long do you want your password to be? (8 - 128 characters)'));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character needs to be a number, 8 - 128 characters. Please try again.');
    return false;
  }

  if (confirm('Do you want your password to contain lowercase letters?')) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm('Do you want your password to contain uppercase letters?')) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm('Do you want your password to contain numbers?')) {
    choiceArr = choiceArr.concat(numberArr);
  }

  if (confirm('Do you want your password to contain special characters?')) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}