// //Generate random alpha numeric password based on pwLength
// function generatePW(length) {
//     var password           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!#$%^&*+=-[]\\\';,/{}|\":<>?';
//     for ( var i = 0; i < pwLength; i++ ) {
//        password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return password;
//  }

//Define arrays for password generator
var lowerAlpha  = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special     = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
var numbers     = "0123456789";

//Generate random alpha numeric password based on pwLength with mulitple arrays
function generatePW() {
    var password    = '';
    for ( var i = 0; i < pwLength; i++ ) {
       password += lowerAlpha.concat(upperAlpha, special, numbers).charAt(Math.floor(Math.random() * lowerAlpha.concat(upperAlpha, special, numbers).length));
    }
    return password;
 }

 
// Choose password length
var pwLength = prompt("Choose a password length between 8 and 128 characters:"); {
    console.log(pwLength);
    if (pwLength < 8) {
        alert("Password length too short. Refresh page and try again!");
    } else if (pwLength > 128) {
        alert("Password length too short. Refresh page and try again!");
    } else generatePW();        
}

// // // //Choose whether or not to use special characters
var confirmSpecial = confirm("Would you like to use special characters?"); {
    console.log(confirmSpecial);
}

// // //Choose whether or not to use numbers
var confirmNum = confirm("Would you like to use numbers?"); {
    console.log(confirmNum);
}

// // //Choose whether or not use uppercase 
var confirmUpper = confirm("Would you like to use uppercase characters?"); {
    console.log(confirmUpper);
}





console.log(generatePW());

// https://stackoverflow.com/questions/28970925/basic-javascript-password-generator





// Check length
// function range(8, 128) {
//     var pwLength = [];
//     for (let i = 8; i <=128; i++) {
//         pwLength.push(i);
//     }
//     return pwLength;
// }


//Define variables
// var pwLength = []
// for (var i = 7; i <= 127; i++) {
//     pwLength.push(i)
// }

// function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }


// for (i of range(1, 128)) {
//     console.log(i);
// }




//  var alphaNumChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//  function randomStr(length, alphaNumChar) { 
//     var pw = ''; 
//     for (var i = length; i > 0; i--) { 
//         pw += alphaNumChar[Math.floor(Math.random() * alphaNumChar.length)]; 
//     } 
//     return pw; 
// } 

// const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"];
// // and then just do:
// [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``;

// console.log(chars)


// function getRandomString() {
//     var pw = '';
//     var characters = 'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for 
// }



// function rand_str_without_O0() {
//     var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var res = "";
//     for(var i = 0; i < pwLength; i++) {
//         var rnd = Math.floor(Math.random() * char.pwLength);
//         res = res + char.charAt(rnd);
//     }
//     return res;
// }

// var pwLength = 9

// var randomString = rand_str_without_O0();

// console.log(randomString)


// function getRandomString(length) {
//     var pw = '';
//     do { pw += Math.random().toString(36).substr(2); } while (pw.length < length);
//     pw = pw.substr(0, length);
    
//     return pw;
//   }
  
//   var password = getRandomString(128);

// console.log(password)
