/*

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

*/


let sum = 0;

for (let i = 91; i < 130; i++) {
    if (i % 2 !== 0) {
        sum += i;
    };
};
console.log(sum);




/*

Subtask-2:

Display sum of all the even numbers from 51 to 85.

*/


let summation = 0;

for (let i = 51; i < 86; i++) {
    if (i % 2 === 0) {
        summation += i;
    };
};
console.log(summation);