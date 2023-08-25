let removeDuplicates = function (totArray) {
    let uniqueArray = [];
    
    for (let i = 0; i < totArray.length; i++) {
      if (uniqueArray.indexOf(totArray[i]) === -1) {
        uniqueArray.push(totArray[i]);
      }
    }
    
    return uniqueArray;
  }
  
  let totArray = [1, 2,2,2,2,2,4,4,4, 3, 4, 4, 5];
//   const uniqueArray = removeDuplicates(totArray);
  console.log(removeDuplicates(totArray)); 