

let isPalindrome=function (str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

function findPalin(arr) {
  return arr.filter(str => isPalindrome(str));
}

let arr = ["malayalam", "hello", "guvi", "2552", "karthi"];
let palindromeStrings = findPalin(arr);
console.log(palindromeStrings);