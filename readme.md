## Approach and Complexity Analysis

### Question 1: Digit Gatekeeper
* [cite_start]**Approach**: The program iterates through the range [L, R)[cite: 15]. [cite_start]For each number, it checks if it is divisible by K [cite: 16][cite_start], contains no '0' digits [cite: 18][cite_start], and uses a helper function to verify if the sum of its digits is a prime number[cite: 17].
* [cite_start]**Time Complexity**: O(N * D), where N is the range (R - L) and D is the number of digits (max 7 for 10^6)[cite: 20].
* **Space Complexity**: O(D) to store the string representation for digit checking.

### Question 2: Roll-Seed Lock
* [cite_start]**Approach**: The script takes N and a seed [cite: 37] [cite_start]and performs a loop exactly 3 times[cite: 28]. [cite_start]If the current number is even, it uses (current / 2 + seed) [cite: 29][cite_start]; if odd, it uses (current * 3 + seed)[cite: 30]. [cite_start]It then checks if the result is between 100-999 and if the middle digit matches the seed[cite: 32, 35].
* [cite_start]**Time Complexity**: O(1) because the operation always runs for 3 steps regardless of input size[cite: 28].
* **Space Complexity**: O(1).

### Question 3: Mirror Corridor
* [cite_start]**Approach**: The script iterates through possible values of X from 0 to 10,000[cite: 50]. [cite_start]For each X, it checks if (N + X) is a palindrome [cite: 48] [cite_start]and if it is divisible by K[cite: 49]. The first X that satisfies both is the smallest non-negative integer result.
* [cite_start]**Time Complexity**: O(M * D), where M is the search limit (10,001) and D is the number of digits in the sum[cite: 50, 51].
* **Space Complexity**: O(D) to handle the string reversal for palindrome checking.

### Question 4: Fare Calculator
* [cite_start]**Approach**: The fare is calculated using a base fee plus (7 * distance)[cite: 59]. It then applies conditional surcharges: +20 if more than 15 minutes late [cite: 60] and +10% if distance exceeds 10[cite: 61]. Finally, it adds or subtracts the seed based on parity [cite: 62, 63] and rounds the total up to the nearest 5[cite: 64].
* **Time Complexity**: O(1).
* **Space Complexity**: O(1).

### Question 5: Skipping Numbers
* [cite_start]**Approach**: The script uses a loop to find the smallest positive integer 'm' such that the sum of all numbers from 1 to 'm' (excluding those divisible by seed + 2) is at least N[cite: 78]. [cite_start]It tracks the running sum and the current value of 'm' simultaneously[cite: 79, 80].
* **Time Complexity**: O(sqrt(N)) because the sum grows quadratically, reaching N in roughly sqrt(N) steps.
* **Space Complexity**: O(1).

### Question 6: Contest Score Judge
* [cite_start]**Approach**: The score is calculated as (3a + b - 2c)[cite: 95]. [cite_start]The logic ensures the score doesn't drop below 0 [cite: 97] [cite_start]and applies a 10-point penalty if the total number of answers (a+b+c) is greater than 50[cite: 101]. [cite_start]A status of PASS is given if the final score is 60 or higher[cite: 103].
* **Time Complexity**: O(1).
* **Space Complexity**: O(1).