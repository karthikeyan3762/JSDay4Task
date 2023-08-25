// Return all the prime numbers in an array using anonymous

let primeNo = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


console.log(num.filter(primeNo)); 