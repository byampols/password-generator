// Assignment code here
//define a global variable which contains objects including all sets of characters and their names as a descriptor
var characters = [
  {
    name: "lower case",
    set: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  },{
    name: "uppercase",
    set: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  },{
    name: "numeric",
    set: ["0","1","2","3","4","5","6","7","8","9"]
  },{
    name: "special",
    set: [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
  }];

//function that requests a length and returns n as a parsed int
var getLength = function() {
  //define min and max password lengths
  var minLength = 8;
  var maxLength = 128;
  //ask for desired length
  var n = window.prompt("Please enter desired password length (8-128 characters).");
  //turn length into an integer
  n = parseInt(n);
  //if length is not an integer, or is out of the declared bounds, re-run the function
  if (!Number.isInteger(n) || n > maxLength || n < minLength) {
    window.alert("Please enter a valid response.");
    n = getLength();
  }
  return n;
}

//function that requests a type and returns an array of types and the names of the chosen types
var getTypes = function() {
  //create an array to pass 0: array of types 1: names of types
  var typeArray = [[],""]
  //for each type of character
  for (let i = 0; i < characters.length; i++) {
    //check if the user wants the type of character
    var nTypeConfirm = window.confirm("Would you like your password to contain " + characters[i].name + " characters?");
    //if they do, add it to the typeArray
    if (nTypeConfirm) {
      typeArray[0].push(characters[i].set);
      typeArray[1] += (characters[i].name + ", ");
    }
  }
  //check the length of the array of types to ensure there is at least 1 type, if not, request again
  if (typeArray[0].length < 1) {
    window.alert("Please enter a valid response.");
    typeArray = getTypes();
  }
  return typeArray;
}

//function that returns a random password, given proper inputs
var generatePassword = function() {
  //initialize local variables
  var password = "";
  var confirmLength = false;
  var confirmTypes = false;
  //while cancelled, acquire desired length, then confirm desired length
  while (!confirmLength) {
    var n = getLength();
    confirmLength = window.confirm("The length of your password will be " + n + " characters.");
  }

  //while cancelled, acquire desired types, then confirm types
  while (!confirmTypes) {
    window.alert("Please select which character types you would like to include in your password.");
    var typeArray = getTypes();
    //remove the ", " from the end of the string
    var typeNames = typeArray[1].substring(0, typeArray[1].length - 2);
    //confirm the types
    confirmTypes = window.confirm("Your chosen types are: " + typeNames + ".");
  }
  //once the types are confirmed, set the types
  var types = typeArray[0];
  
  //for each unit of length of the password
  for (let i = 0; i < n; i++) {
    //pick a random type
    var typeNum = Math.floor(Math.random() * types.length);
    var type = types[typeNum];
    //pick a random character from that type
    var character = type[Math.floor(Math.random() * type.length)];
    //append it to the password string
    password += character;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
