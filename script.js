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

let generatePassword = function () {
  let userChoice = 0;

  while (userChoice < 8 || userChoice > 128 || null || isNaN(userChoice)) {
    userChoice = prompt(
      "Please pick a password length between 8 - 128 characters")
  }

  let newPassword = "";
  let addUpperCase = confirm(
    "Would you like to add uppercase letters to your new password?"
  );
  if (addUpperCase) {
    newPassword += upperCase;
    console.log(addUpperCase);
  }
  let addLowerCase = confirm(
    "Would you like to add lowercase letters to your new password?"
  );
  if (addLowerCase) {
    newPassword += lowerCase;
    console.log(addLowerCase);
  }
  let addSpecialChars = confirm(
    "Would you like to add special characters to your new password?"
  );
  if (addSpecialChars) {
    newPassword += specialChars;
    console.log(addSpecialChars);
  }
  let addNumbers = confirm(
    "Would you like to add numbers to your new password?"
  );
  if (addNumbers) {
    newPassword += numbers;
    console.log(addNumbers);
  }

  if (
    addUpperCase === false &&
    addLowerCase === false &&
    addSpecialChars === false &&
    addNumbers === false
  ) {
    alert(
      "You must pick at least one type of characters to be able to generate a password"
    );
    window.location.reload();
  }

  let arr = Array.from(newPassword);
  console.log(arr);
  let result = "";

  for (let i = 0; i < userChoice; i++) {
    result += arr[Math.floor(Math.random() * arr.length)];
  }
  return result;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
