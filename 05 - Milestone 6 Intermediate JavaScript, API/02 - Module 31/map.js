const numbers = [1, 2, 3, 4, 5];

// const doubled = [];

// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled)

// function doubleNumber(numbers) {
//     const result = numbers * 2
//     return result;
// }

const result = numbers.map(number => number * 2);
console.log(result)

const result2 = numbers.map(number => number + 5);
console.log(result2)