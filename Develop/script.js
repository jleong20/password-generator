// Assignment Code
var generateBtn = document.querySelector("#generate");

//add var
var pwLength;
var pwLower;
var pwUpper;
var pwNum;
var pwSpec;
var password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//add display funct.
function generatePassword(){
  //add prompts
  pwLength = prompt("length of pw");
  pwLower = prompt("lowercase?");
  pwUpper = prompt("upper?");
  pwNum = prompt("numbers?");
  pwSpec = prompt("special chars?");

  password = "hello";
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
