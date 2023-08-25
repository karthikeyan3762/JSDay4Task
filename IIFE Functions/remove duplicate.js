// remove duplicates


((totArray) => {
  let uniqueArray = [];
  
  for (let i = 0; i < totArray.length; i++) {
    if (uniqueArray.indexOf(totArray[i]) === -1) {
      uniqueArray.push(totArray[i]);
    }
  }
  
  console.log(uniqueArray);
})([1, 2, 2, 2, 2, 2, 4, 4, 4, 3, 4, 4, 5]);