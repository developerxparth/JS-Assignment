let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let count = 0;
for (let x = L; x < R; x++) {
    let strX = x.toString();
    
    // Check if divisible by K and contains no '0'
    if (x % K === 0 && !strX.includes('0')) {
        let sumDigits = 0;
        for (let digit of strX) {
            sumDigits += parseInt(digit);
        }
        
        // Check if sum of digits is prime
        if (isPrime(sumDigits)) {
            count++;
        }
    }
}
alert(count);