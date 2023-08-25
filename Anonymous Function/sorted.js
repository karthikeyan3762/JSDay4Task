let sortedArrays=function (num1, num2) {
    let merged = [...num1, ...num2];
    merged.sort((a, b) => a - b);
    
    const length = merged.length;
    if (length % 2 === 0) {
      let middle = length / 2;
      return (merged[middle - 1] + merged[middle]) / 2;
    } else {
      let middle = Math.floor(length / 2);
      return merged[middle];
    }
  }
  
  let num1 = [1, 2, 3];
  let num2 = [4, 5, 6];
  
  console.log(sortedArrays(num1, num2));