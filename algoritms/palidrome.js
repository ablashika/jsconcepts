function palidrome(string) {

string = string.toLowerCase()
let charArray = string.split('')
let validChar = "abcdefghijklmnopqrstuvwxyz".split('');
let letterChar = []


//stripping anything that is not a cha

charArray.forEach(character=> {
    if (validChar.indexOf(character) > -1) {
       letterChar.push(character)
    }
});
console.log(letterChar)

    if(letterChar.join('') === letterChar.reverse().join('')) {
        return true;
    } else {
        return false;
    }


    
}

console.log(palidrome("madam i'm adam"))





//iterative solutution
// let Palindrome = (str) => {
//     var len = str.length;
//   if (len < 2) {
//     return true;
//   }
//   var i = 0;
//   var j = len - 1;
//   console.log(str[i])

//   while (i < j) {
//     if (str[i] != str[j]) {
//         console.log(str[i])
//   return false;
//     }

    
//     i += 1;
//     j -= 1;
//   }
//   return true;
// }

// console.log(Palindrome("madam"))