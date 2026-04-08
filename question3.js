let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

let foundX = -1;
for (let X = 0; X <= 10000; X++) {
    let sum = N + X;
    if (isPalindrome(sum) && sum % K === 0) {
        foundX = X;
        break;
    }
}
alert(foundX);