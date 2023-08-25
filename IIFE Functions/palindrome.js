


((arr) => {
  let isPalindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  };

  let palindromeStrings = arr.filter(str => isPalindrome(str));
  console.log(palindromeStrings);
})(["malayalam", "hello", "guvi", "2552", "karthi"]);
