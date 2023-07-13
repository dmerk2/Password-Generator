// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let specialChars = "`~!@#$%^&*()_+=-|}{[]:;'?/.>,<";
let numbers = "1234567890";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function () {
  let userChoice = prompt(
    "Please pick a password length between 8 - 128 characters"
  );
  if (userChoice < 8 || userChoice > 128 || null) {
    alert("Please choose the correct amount of characters");
    return;
  }

  let newPassword = "";
  let addUpperCase = confirm(
    "Would you like to add uppercase letters to your new password?"
  );
  if (addUpperCase) {
    newPassword += addUpperCase;
    console.log(addUpperCase);
  }
  let addLowerCase = confirm(
    "Would you like to add lowercase letters to your new password?"
  );
  if (addLowerCase) {
    newPassword += addLowerCase;
    console.log(addLowerCase);
  }
  let addSpecialChars = confirm(
    "Would you like to add special characters to your new password?"
  );
  if (addSpecialChars) {
    newPassword += addSpecialChars;
    console.log(addSpecialChars);
  }
  let addNumbers = confirm(
    "Would you like to add numbers to your new password?"
  );
  if (addNumbers) {
    newPassword += addNumbers;
    console.log(addNumbers);
  }
};

// for (let i = 0; i < newPassword.length; i++) {

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
