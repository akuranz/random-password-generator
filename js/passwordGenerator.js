// Choose password length
var pwLength = prompt("Choose a password length between 8 and 128 characters:"); {
    console.log(pwLength);
    if (pwLength < 8) {
        alert("Password length too short. Refresh page and try again!");
    } else if (pwLength > 128) {
        alert("Password length too short. Refresh page and try again!");
    } else generatePW();        
}







function generatePW(length) {
    var password           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characterslength = characters.length;
    for ( var i = 0; i < pwLength; i++ ) {
       password += characters.charAt(Math.floor(Math.random() * characterslength));
    }
    return password;
 }
 
 console.log(generatePW(length));







// // //Choose whether or not to use special characters
// var pwSpecialChar = prompt("Would you like to use special characters?"); {
//     console.log(pwSpecialChar);
// }

// //Choose whether or not to use numbers
// var pwNum = prompt("Would you like to use numbers?"); {
//     console.log(pwNum);
// }

// //Choose whether or not use uppercase 
// var pwUpper = prompt("Would you like to use uppercase characters?"); {
//     console.log(pwUpper);
// }






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
