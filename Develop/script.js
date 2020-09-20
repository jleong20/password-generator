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
  /*
  password = characters.concat(lowerChars, numbers);*/
  var pwLength = charList.length;

  for(var i=0; i<charLength; i++){
    pw += charList.charAt(Math.floor(Math.random()*pwLength));
  }
  return pw;
}
function askLength(){
  var pwLength = 0;
  while(pwLength < 8 || pwLength > 128){
  pwLength = prompt("length of pw");
  }
  return pwLength;
}
function askLowercase(){
  var pwLower = confirm("lowercase?");
  return pwLower;
}
function askUppercase(){
  var pwUpper = confirm("upper?");
  return pwUpper;
}
function askNumber(){
  var pwNum = confirm("numbers?");
  return pwNum;
}
function askSpecChar(){
  var pwSpec = confirm("special chars?");
  return pwSpec;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
