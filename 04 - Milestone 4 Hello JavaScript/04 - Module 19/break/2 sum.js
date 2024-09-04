/* 

Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

*/

let i = 1;
let sum = 0;

while (true) { // Loop indefinitely until the break condition is met
    sum += i;
    if (sum >= 100) { // Stop when sum reaches or exceeds 100
        break;
    }
    i++;
}
console.log(sum);

