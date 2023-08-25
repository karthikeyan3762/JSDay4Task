((num1, num2) => {
  let merged = [...num1, ...num2];
  merged.sort((a, b) => a - b);
  
  let length = merged.length;
  if (length % 2 === 0) {
    let middle = length / 2;
    console.log((merged[middle - 1] + merged[middle]) / 2);
  } else {
    let middle = Math.floor(length / 2);
    console.log(merged[middle]);
  }
})([1, 2, 3], [4, 5, 6]);