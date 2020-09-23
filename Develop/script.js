// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
 var length = prompt("How many characters would you like your password to contain?");
var special = confirm("Click OK to conrfirm special characters.");
var numeric = confirm("Click OK to confirm numeric characters.");
var lowercase = confirm("Click OK to confirm including lowercase characters." );
var uppercase =confirm("Click OK to confirm including uppercase characters ");
 if (length >= 8 && length<=128){

 }
 else{
   alert("You must include atleast 8 characters!")
 }
  // alert 
  // return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// make function genrate password that returns a generated password
// generate password will do all prompts

// objective create a strong password by asking questions
// if button clicked then prompts begin asking questions
// confirm criteria
// prompt password of 8-128 characters
// prompt character types
// generate password and written to page or displayed in alrt
// 

