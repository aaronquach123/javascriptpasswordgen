// Assignment code here
//Prompts for the length of the password
var lengthOption = function() {
  var lengthOptionPrompt = window.prompt("How many characters?");
  //If not awnser correct return 
  if (isNaN(lengthOptionPrompt) || lengthOptionPrompt === null || lengthOptionPrompt === "") {
    window.alert("Please supply an integer number between 8 and 128.");
    return lengthOption();
  };
  //turn back into integer
  lengthOption = parseInt(lengthOptionPrompt)
  //statement to check if between 8 and 128
  if (lengthOption < 8 || lengthOption > 128) {
    window.alert("Please supply an integer number between 8 and 128.");
  };
};

//function to determine password character set
var characterChoice = function () {
  var uppercase = window.confirm("Uppercase?");
  var lowercase = window.confirm("Lowercase?");
  var integer = window.confirm("Integer?");
  var symbol = window.confirm("Symbol?");
  var options = [];
//takes array and concats strings into array
  if (uppercase) {
    options = options.concat("abcdefghijklmnopqrstuvwxyz");
  };
  if (uppercase) {
    options = options.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); 
  };
  if (integer) {
    options = options.concat("0123456789");
  };
  if (symbol) {
    options = options.concat(" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  };
  //Turns the array back into a string
  options = options.join("");
  charSet = options.toString();
  console.log(charSet);
}
// Calls choice and length function to supply variables at button press
var generatePassword = function() {
  characterChoice();
  lengthOption();
  //Uses the length of the character set and randomly chooses from the list
  var password = "";
  debugger;
  for (var i = 0; i < lengthOption; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(password);
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
