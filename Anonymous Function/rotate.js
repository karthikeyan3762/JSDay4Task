
let rotateArray=function (totArray, k) {
    let n = totArray.length;
    k %= n;
    
    let rotatedPart = totArray.slice(n - k);
    let remainingPart = totArray.slice(0, n - k);
    
    return rotatedPart.concat(remainingPart);
  }
  
  let totArray = [1, 2, 3, 4, 5, 6, 7];
  let k = 2;
  let rotate = rotateArray(totArray, k);
  console.log(rotate);