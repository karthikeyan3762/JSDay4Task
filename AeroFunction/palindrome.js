


let isPalindrome = (str)=> {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

let findPalindromes =  (arr)=> {
  return arr.filter(str => isPalindrome(str));
}

let arr = ["malayalam", "hello", "guvi", "2552", "karthi"];
let palindrome = findPalindromes(arr);
console.log(palindrome); 