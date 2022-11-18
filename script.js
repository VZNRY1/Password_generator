// Assignment Code

//create global variables to store all character types, uppercase/lowercase alpha,numbers,special characters

//var alphabet = "abcd".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var sCharacaters = "!?_*$><%^".split("");

var numbers = "0123456789".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var userInput = [{upperCase}, {lowerCase}, {sCharacaters}, {numbers}]

var createdPassword = '';
//will be used to generate final password

const passwordAdded = lowerCase + sCharacaters + numbers + upperCase;

console.log('typesArr:', userInput);
function passwordCriteria(){
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

 var passwordCharacters = prompt("What type of characters would youlike to include? upperCase,lowerCase,sCharacters,numbers");
  if(passwordCharacters === "upperCase"+"lowerCase","sCharacters","numbers"){
    return;
  }
  if(passwordCharacters === "upperCase"+"lowerCase","scharacters"){
    return;
  }
  if(passwordCharacters === "uppercase" + "lowerCase"){
    return;
  }
  if(passwordCharacters === "upperCase"){
    return;
  }
  if()

  //create variable to equal these possibilites then set the expressions equal to each other
//this is supposed to check to see what array they are pulling from

  //for( let i = 0; i< length;i +){}
 //if(passwordCharacter === )

 //ask what type of character types they would like to include

 //validate that the user selected a character type

 //create storage for user input as a variable look at lesson 21 and 22

 //return variable created 

}
//create a Math.random function

//create an var with objects that have variables and then set the variables equal to something so that i can call it back


function generatePassword(){

  var criteria = passwordCriteria();
  console.log("button clicked");
  
  //possible characters variable that is an array where character types will be inserted. 
return "Generated password will go herw"
}









var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
