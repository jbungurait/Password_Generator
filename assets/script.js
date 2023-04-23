// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {

  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "123456789";
  var special = "!@#$%^&*?";

  var gen = "";
  var genPassword = "";

  var length = prompt("How long would you like the password to be? Must be between 8 and 128 characters.");

  if (length < 8 || length > 128) {
    length = prompt("Choose between 8 and 128");
  }

  var lowerCase = confirm("Use lower case characters?");
  
  if (lowerCase) {
    gen += lowerChar;
  };
  
  var upperCase = confirm("Use upper case characters?");

  if (upperCase) {
    gen += upperChar;
  };
  
  var specialChar = confirm("Include special characters?");

  if (specialChar) {
    gen += special;
  };
  
  var num = confirm("Use numbers?");

  if (num) {
    gen += numbers;
  };

  for (var i = 0; i < length; i++) {
    genPassword += gen.charAt(Math.floor(Math.random() * gen.length));
  };

  return genPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
