// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "{",
  "}",
  "]",
  "[",
  ";",
  ",",
  ".",
  ">",
  "<",
  "?",
  "/",
  "|",
];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let generatePassword = function () {
  let passwordLength = prompt(
    "How many characters do you want your password between 8 - 128?"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick between 8 - 128 characters");
  }
  console.log(passwordLength);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
