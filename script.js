// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //TODO: your code here

  //create variables
  //password lengths
  var length = 0;
  //lowercase array
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //uppercase array
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //special characters array
  var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  //numbers array
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  //possible characters array
  var possible = [];
  //variable for responses to confirm/prompt
  var confirmed = true;
  //create a variable that will hold the final password
  var finalPassword = "";


  //display a prompt asking user for password length
  var length = prompt("How many characters do you want your password to have? Please choose a length between 8 and 129 characters.");
  //edge case: must be number
  if (isNaN(length)) {
    alert("Please choose a number.")
    return;
  }
  //edge case: 8 <= x <= 129
  if (length < 8 || length > 129) {
    alert("Please choose a length between 8 and 129 characters.")
    return;
  }

  //display confirms for all diffrent character types (listed in readme)
  var lowLetters = confirm("Do you want your password to have lower case letters?");
  var upLetters = confirm("Do you want your password to have upper case letters?");
  var num = confirm("Do you want your password to have numbers?")
  var specChar = confirm("Do you want your password to have special characters?");
  //check IF the user answered true on any of the confirms, add that array to the possible characters array
  if (lowLetters == true) {
    possible = lowerCase.concat(possible);
  }

  if (upLetters == true) {
    possible = upperCase.concat(possible);
  }

  if (num == true) {
    possible = numbers.concat(possible);
  }

  if (specChar == true) {
    possible = special.concat(possible);
  }

  //ensure that they answered true to a least 1 confirm
  if (possible.length == 0) {
    alert("You need to pick one of these!")
  }

  console.log(possible);
  //want to create a loop for as long as password length
  //for each iteration, select a random character out of the possible characters array and add it to the final password variable
  var final = [];
  for (i = 0; i < length; i++) {
    final.push(possible[Math.floor(Math.random() * possible.length)]);
  };
  var finalPassword = final.join("");
  //return the final password from the generated password function
  return finalPassword;
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
