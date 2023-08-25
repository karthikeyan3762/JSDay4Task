
((totArray, k) => {
  let n = totArray.length;
  k %= n;
  
  let rotatedPart = totArray.slice(n - k);
  let remainingPart = totArray.slice(0, n - k);
  
  console.log(rotatedPart.concat(remainingPart));
})([1, 2, 3, 4, 5, 6, 7], 2);