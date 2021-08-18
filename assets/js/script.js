// Assignment code here
var characters = [["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
                  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                  ["0","1","2","3","4","5","6","7","8","9"],
                  [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]];

var lowerCase = characters[0];
var upperCase = characters[1];
var numeric = characters[2];
var special = characters[3];

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

//function that returns a random password, given proper inputs
var generatePassword = function() {
  //define initial local variables
  var password = "";
  var confirmLength = false;
  //while cancelled, acquire desired length, then confirm desired length
  while (!confirmLength) {
    n = getLength();
    confirmLength = window.confirm("The length of your password will be " + n + " characters.");
  }
  //password criteria: types (lowercase, uppercase, numeric, special), ensure at least 1 type is selected, and that each prompt is confirmed
  var types = characters;
  
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
