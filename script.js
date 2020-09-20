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
  var charList = ' ';
  var pw = ' ';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specCharacters = '!@#$%^&*()[]{}<>,.?/`';
  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var charLength = askLength();
  var lowercase = askLowercase();
  var uppercase = askUppercase();
  var number = askNumber();
  var specChar = askSpecChar();
  if(lowercase === true){
    charList = charList.concat(lowerChars);
  }
  if(uppercase === true){
    charList = charList.concat(characters);
  }
  if(number === true){
    charList = charList.concat(numbers);
  }
  if(specChar === true){
    charList = charList.concat(specCharacters);
  }

  var pwLength = charList.length;

  for(var i=0; i<charLength; i++){
    pw += charList.charAt(Math.floor(Math.random()*pwLength));
  }
  return pw;
}
function askLength(){
  var pwLength = 0;
  while(pwLength < 8 || pwLength > 128){
  pwLength = prompt("Choose a length between 8 and 128: ");
  }
  return pwLength;
}
function askLowercase(){
  var pwLower = confirm("Would you like lowercase letters in your password?");
  return pwLower;
}
function askUppercase(){
  var pwUpper = confirm("Would you like uppercase letters in your password?");
  return pwUpper;
}
function askNumber(){
  var pwNum = confirm("Would you like numbers in your password?");
  return pwNum;
}
function askSpecChar(){
  var pwSpec = confirm("Would you like special characters in your password?");
  return pwSpec;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
