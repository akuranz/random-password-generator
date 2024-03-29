//Define arrays for password generator
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";
var numbers = "0123456789";

//Loads the page first so user can click on "Generate Password" button and then the prompt and confirm functions will run
document.querySelector("#generatePW").addEventListener("click", function() {
  var options = getPasswordSpecs();
  var passwordArr = pushSpecifiedChoices(options);
  var password = generatePW(options.pwLength, passwordArr);
  document.querySelector("#password").innerHTML = password;
  document.querySelector("#copy").addEventListener("click", copyToClipboard);
});

//finds the textarea with the id of password, highlights the element and then copies it to the clipboard
function copyToClipboard() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}

//Run all promps and confirms under a single function so it's easier to call all of the user defined valaues in each varibale all at once
function getPasswordSpecs() {
  var instructions = alert('To successfully generate a password you must: \n-pick a number between 8 and 128 \n-select at least one character type \nClick OK to continue!');
  var pwLength = parseInt(
    prompt("Choose a password length between 8 and 128 characters:")
  );
  
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Please pick a number between 8 and 128. Click okay and try again!");
    return getPasswordSpecs();
  }

  var confirmSpecial = confirm("Would you like to include special characters?");
  var confirmNum = confirm("Would you like to include numbers?");
  var confirmLower = confirm("Would you like to include lowercase characters?");
  var confirmUpper = confirm("Would you like to include uppercase characters?");
  
  return {
    pwLength,
    confirmNum,
    confirmSpecial,
    confirmLower,
    confirmUpper
  };
}

//push arrays to specifiedcharacters and finalpassword
// var op (local var) === options (global)
function pushSpecifiedChoices(op) {
  var { confirmNum, confirmSpecial, confirmLower, confirmUpper } = op;
  var specifiedCharacters = [];
  var finalpassword = [];

  if (confirmSpecial) {
    specifiedCharacters.push(specialChar);
    var randomItem = getRandomItemInArr(specialChar);
    finalpassword.push(randomItem);
  }

  if (confirmNum) {
    specifiedCharacters.push(numbers);
    var randomItem = getRandomItemInArr(numbers);
    finalpassword.push(randomItem);
  }

  if (confirmLower) {
    specifiedCharacters.push(lowerAlpha);
    var randomItem = getRandomItemInArr(lowerAlpha);
    finalpassword.push(randomItem);
  }

  if (confirmUpper) {
    specifiedCharacters.push(upperAlpha);
    var randomItem = getRandomItemInArr(upperAlpha);
    finalpassword.push(randomItem);
  }

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
  let final = passwordArr.finalpassword.split("");

  for (var i = passwordArr.finalpassword.length; i < length; i++) {
    var randChar = getRandomItemInArr(passwordArr.specifiedCharacters);
    final.push(randChar);
  }
  
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