//Define arrays for password generator
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";
var numbers = "0123456789";

//Loads the page first so user can click on "Generate Password" button and then the prompt and confirm functions will run
document.querySelector("#generatePW").addEventListener("click", function() {
  //defines options variable as the function that prmpts and confirms so it's easier to move and reference that section of code
  var options = getPasswordSpecs();
  //defines passwordArr as the function that pushes at least one character from each array if it evaulates to true
  var passwordArr = pushSpecifiedChoices(options);
  //sets the length to the user definied password length held in the option variable
  var password = generatePW(options.pwLength, passwordArr);
  //returns randomized password to text area with any html preserved (as opposed to .textContent)
  document.querySelector("#password").innerHTML = password;
  //runs the copyToClipboard function when the "copy to clipboard" button is clicked
  document.querySelector("#copy").addEventListener("click", copyToClipboard);
});

//finds the textarea with the id of password, highlights the element and then copies it to the clipboard
function copyToClipboard() {
  var copyText = document.querySelector("#password");
  //Only works with textarea or input text element
  copyText.select();
  document.execCommand("copy");
}

//Run all promps and confirms under a single function so it's easier to call all of the user defined valaues in each varibale all at once
function getPasswordSpecs() {
  var instructions = alert('To successfully generate a password you must: \n-pick a number between 8 and 128 \n-select at least one character type \nClick OK to continue!');
  // Choose password length & make sure it only accepts a number
  var pwLength = parseInt(
    prompt("Choose a password length between 8 and 128 characters:")
  );
  console.log("Password Length:", typeof pwLength);
  
  //Make sure the pwLenth prompt only accepts a number between 8 and 128 and doesn't accept "not numbers"
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    //this helps so if the pwLength does evaluate outside 8 and 128, the other confirms will not be alerted
    alert("Password length too short. Click okay and try again!");
    return getPasswordSpecs();
  }
  //Choose whether or not to use special characters
  var confirmSpecial = confirm("Would you like to include special characters?");
  console.log(confirmSpecial);

  //Choose whether or not to use numbers
  var confirmNum = confirm("Would you like to include numbers?");
  console.log(confirmNum);

  //Choose whether or not use lowercase
  var confirmLower = confirm("Would you like to include lowercase characters?");
  console.log(confirmLower);

  //Choose whether or not use uppercase
  var confirmUpper = confirm("Would you like to include uppercase characters?");
  console.log(confirmUpper);

  //end the function execution and logs all of the user defined values in the getPasswordSpecs function
  
  return {
    pwLength,
    confirmNum,
    confirmSpecial,
    confirmLower,
    confirmUpper
  };
}

//push arrays to specifiedCharacters
// var op (local var) === options (global)
function pushSpecifiedChoices(op) {
  var { confirmNum, confirmSpecial, confirmLower, confirmUpper } = op;
  //empty varibale where character arrays from the user choices about which arrays to include in their password will be pushed
  var specifiedCharacters = [];
  //empty variable where a single random character from each array the user choosed to include in their password will be pushed 
  //this ensures at least on character from each array type will be included in the password if the user selects true for the confirm alerts
  var finalpassword = [];

  //if confirmLower is true, will push all special characters in specifiedcharacters variable and push 1 random special character to the finalpassword variable immediately
  if (confirmSpecial) {
    specifiedCharacters.push(specialChar);
    var randomItem = getRandomItemInArr(specialChar);
    finalpassword.push(randomItem);
  }

  //if confirmLower is true, will push all number characters in specifiedcharacters variable and push 1 random number character to the finalpassword variable immediately
  if (confirmNum) {
    specifiedCharacters.push(numbers);
    var randomItem = getRandomItemInArr(numbers);
    finalpassword.push(randomItem);
  }

  //if confirmLower is true, will push all lowercase characters in specifiedcharacter variable and push 1 random lowercase character to the finalpassword variable immediately
  if (confirmLower) {
    specifiedCharacters.push(lowerAlpha);
    var randomItem = getRandomItemInArr(lowerAlpha);
    finalpassword.push(randomItem);
  }

  //if confirmLower is true, will push all uppercase characters in specifiedcharacter variable and push 1 random uppercase character to the finalpassword variable immediately
  if (confirmUpper) {
    specifiedCharacters.push(upperAlpha);
    var randomItem = getRandomItemInArr(upperAlpha);
    finalpassword.push(randomItem);
  }

  //returns the two variable defined at the beginning of the function and joins the pushed items in the array
  return {
    specifiedCharacters: specifiedCharacters.join(""),
    finalpassword: finalpassword.join("")
  };
}

//will return one random item from any array that is passed through the function
function getRandomItemInArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Generate random alpha numeric password with a general length argument and the passwordArr variable
function generatePW(length, passwordArr) {
  console.log(length, passwordArr);
  //splits the 1-4 random items in the finalpassword variable 
  //this final variable can only be used in this function bc it uses "let"
  let final = passwordArr.finalpassword.split("");
  console.log("FINAL:", passwordArr.finalpassword.split(""));

  //loops starting at the number of items in the finalpassword variable (1-4) to however length argument (which is defined in the function at the top)
  //pushes a random selection of characters from the specifiedCharacters variables until it reaches the user defined length
  for (var i = passwordArr.finalpassword.length; i < length; i++) {
    var randChar = getRandomItemInArr(passwordArr.specifiedCharacters);
    final.push(randChar);
  }
  
  //returns a shuffled version of the final variable and joins the individual items
  return ShuffleArr(final).join("");
}

//Shuffle all of the letters in any array that is passed through the function by looping through the array 
//moving each letter to a different random position in the array
function ShuffleArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    var randIndex = Math.floor(Math.random() * arr.length);

    var temp1 = arr[i];
    var temp2 = arr[randIndex];

    arr[i] = temp2;
    arr[randIndex] = temp1;
  }
  return arr;
}