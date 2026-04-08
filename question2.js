let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let current = N;
for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 + seed;
    }
}

let resultStr = current.toString();
let isMiddleDigitMatch = false;

if (current >= 100 && current <= 999) {
    // The middle digit of a 3-digit number is at index 1
    if (parseInt(resultStr[1]) === seed) {
        isMiddleDigitMatch = true;
    }
}

if (isMiddleDigitMatch) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}