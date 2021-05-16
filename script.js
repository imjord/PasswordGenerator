


// variables 

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numCase = "0123456789";
var symCase =  "!@#$%^&*(-)=+/.,<>";
var results = "";




// vars with prompt for password length and confirms .. with if conditionals.
//declared global varriables and added the prompts and confirms into the button function

var passLength 


var upperConfirm 

var lowerConfirm 

var numConfirm 

var symConfirm 


console.log(results);
 
//  function that randomizes the confirms with the password length 

function generatePassword() {

  var password = "";
  for (i = 1; i <= passLength; i++) {
    var randomPass = Math.floor(Math.random() * results.length);

     password += results[randomPass];
    
  }
  return password;
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   passLength = window.prompt("How long would you like your password?");
  if(passLength > 128 || passLength < 8) {
    alert("No less than 8 and no more than 128! Refresh and try again!");
  }


 upperConfirm = confirm("Do you want uppercase letters?");
  if(upperConfirm) {
    results += upperCase;
  }

 lowerConfirm = confirm("Do you want lowercase letters?");
  if(lowerConfirm) {
    results += lowerCase;
  }

 numConfirm = confirm("Do you want any numbers?");
  if(numConfirm) {
    results += numCase;
  }

 symConfirm = confirm("Do you want any symbols?");
  if(symConfirm) {
    results += symCase;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
