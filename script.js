// Assignment Code

//create global variables to store all character types, uppercase/lowercase alpha,numbers,special characters

var passwordText;

//record the answers from the questions
//confirm what criteria was selected
//push to an array that will randomize the letters
//
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //var alphabet = "abcd".split("");


var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var sCharacaters = "!?_*$><%^".split("");

var numbers = "0123456789".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var userInput = [];

var createdPassword = [];
//will be used to generate final password

var myPassword;

//function passwordCriteria(){
//asks how long password should be
  var passwordLength = parseInt (prompt("How many characters would you like your password to contain?"));
  //validate user input
  if(passwordLength< 8 || passwordLength > 128){
    alert("Password length has to be between 8 and 128 characters")
    return null; 
  }
 if(Number.isNaN(passwordLength)){
  alert("Password Length must be provided as an Integer")
  return null;
 }

//eventually want to reprompt if incorrect
//creates true or false prompts that determine characters they want to include
var lower = confirm("Do you want Lower Case?");
 var upper = confirm("Do you want Upper Case?");
 var number = confirm("Do you want Numbers?");
 var specialChar = confirm("Do you want Special Characters");

 //if statement that makes the prompts the user to select at least one of the criteria
 if (
  lower === false &&
  upper === false &&
  number === false &&
  specialChar === false 
 ){
  alert("Please select at least one characters!")
  return null;
 }
//}


//functions that push characters into the final array


//function criteriaSelected (){
  //var selectedCriteria;
  if(lower === true){
    userInput.push("lowercase");
  }
  if(upper === true){
    userInput.push("uppercase");
  }
  if(number === true){
    userInput.push("numbers");
  }
  if(specialChar === true){
    userInput.push("spec");
  }
 
  //return selectedCriteria;
//}


function choseLowerCase(){
  var lilLetters = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  return lilLetters; 
}

function choseUpperCase(){
  var bigLetters = upperCase[Math.floor(Math.random() * upperCase.length)];
  return bigLetters; 
}

function choseNumbers(){
  var numeric = numbers[Math.floor(Math.random() * numbers.length)];
  return numeric; 
}

function choseSpecChar(){
  var oddCharacters = sCharacaters[Math.floor(Math.random() * sCharacaters.length)];
  return oddCharacters; 
}

//functions that will take selected characters for password


//if(criteriaSelected){
  for (let i = 0; i < passwordLength; i++) {
    var passwordOptions = userInput[Math.floor(Math.random() * userInput.length)];
    if(passwordOptions === "lowercase"){
      createdPassword.push(choseLowerCase());
    }
    if(passwordOptions === "uppercase"){
      createdPassword.push(choseUpperCase());
    }
    if(passwordOptions === "numbers"){
      createdPassword.push(choseNumbers());
    }
    if(passwordOptions === "spec"){
      createdPassword.push(choseSpecChar());
    }
  }
//}

console.log(createdPassword);
console.log(userInput);

return createdPassword.join('');
  //var criteria = passwordCriteria();
  
  console.log("button clicked");
  
  //possible characters variable that is an array where character types will be inserted. 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
