// Sum of all numbers in an array using arrofunction

let sumOfNum= (numbers) => numbers.reduce((sum, num) => sum + num, 0);


let numbers = [1, 2,3,4,7,8,9,6];

console.log("Sum of all numbers in an array is "+sumOfNum(numbers)); 
