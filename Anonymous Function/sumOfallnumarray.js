// Sum of all numbers in an array using anaonymous

let sumArray=function (numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  
  let numbers = [1, 2,3,4,7,8,9,6];
  let totalSum = sumArray(numbers);
  console.log(totalSum); 