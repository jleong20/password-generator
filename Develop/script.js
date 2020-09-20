// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//add functions
function generatePassword(){
  var password = '';
  var characters = 
  askLength();
  askLowercase();
  askUppercase();
  askNumber();
  askSpecChar();
}
function askLength(){
  var pwLength = 0;
  while(pwLength < 8 || pwLength > 128){
  pwLength = prompt("length of pw");
  }
}
function askLowercase(){
  var pwLower = confirm("lowercase?");
}
function askUppercase(){
  var pwUpper = confirm("upper?");
}
function askNumber(){
  var pwNum = confirm("numbers?");
}
function askSpecChar(){
  var pwSpec = confirm("special chars?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
