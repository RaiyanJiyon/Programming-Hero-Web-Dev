const numbers = [1, 2, 3, 4, 5];

// find method return a single element if the condition is matched, and if condition is not matched it will return undefined.
const result = numbers.find(number => number % 2 === 0);
console.log(result);

const result2 = numbers.find(number => number < 1 === 0);
console.log(result2);