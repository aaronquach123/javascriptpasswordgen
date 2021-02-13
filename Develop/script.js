// Assignment code here
//Prompts for the length of the password
var lengthOption = function() {
  var lengthOptionPrompt = window.prompt("How many characters?");
  //If not awnser correct return 
  if (isNaN(lengthOptionPrompt) || lengthOptionPrompt === null || lengthOptionPrompt === "") {
    window.alert("Please supply an integer number between 8 and 128.")
    return lengthOption();
  }
  //turn back ito integer
  lengthOption = parseInt(lengthOptionPrompt)
}
console.log(lengthOption)

var characterChoice = function () {
  var characterChoicePrompt = window.prompt("Enter '1' for lowercase '2' for upercase '3' for integers or '4' for symbols.");
  characterChoicePrompt = parseInt(characterChoicePrompt);
  switch (characterChoicePrompt) {
    case 1:
      characterChoice = "abcdefghijklmnopqrstuvwxyz";
      console.log(characterChoice);
      break;
    case 2:
      characterChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case 3:
      characterChoice = "0123456789"
      break;
    case 4:
      characterChoice = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      break;
    default:
      window.alert("You did not pick a valid answer please try again.");
      return characterChoice();
  }
}

var generatePassword = function() {
  characterChoice();
  lengthOption();
  var password = ""
  debugger;
  for (var i = 0; i < lengthOption; i++) {
    password += characterChoice.charAt(Math.floor(Math.random() * characterChoice.length));
  }
  console.log(password);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
