// Assignment Code
var generateBtn = document.querySelector("#generate");

//Search alphabet & number
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var Numeric = "1234567890";
var special = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";
var passwordCriteria = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to genrate password
function generatePassword() {
  var passwordlength = parseInt(window.prompt("How many characters would you like your password to be? 8-128"))
  
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Password must be between 8 and 128 characters")
    generatePassword()
  }

  var passwordUpper = window.confirm("Do you want Uppercase characters?")
  var passwordLower = window.confirm("Do you want Lower case characters?")
  var passwordNumeric = window.confirm("Do you want to include numeric values?")
  var passwordSpecial = window.confirm("Do you want to use special characters")
  
  if (passwordUpper === false && passwordLower === false && passwordNumeric === false && passwordSpecial === false) {
    window.alert("Must use one of the previous option")
    generatePassword()
  }
  if (passwordUpper === true) {
    for (var i = 0; i < upperCase.length; i++) {
      passwordCriteria.push(upperCase[i])
    }
  }
  if (passwordLower === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      passwordCriteria.push(lowerCase[i])
    }
  }
  if (passwordNumeric === true) {
    for (var i = 0; i < Numeric.length; i++) {
      passwordCriteria.push(Numeric[i])
    }
  }
  if (passwordSpecial === true) {
    for (var i = 0; i < special.length; i++) {
      passwordCriteria.push(special[i])
    }
  }
  var Password = ""
  for (var i = 0; i < passwordlength; i++) {
    var randomindex = Math.floor(Math.random() * passwordCriteria.length)
    Password = Password + passwordCriteria[randomindex]
  }
  return Password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
