const numbers = [33, 50, 79, 78, 90, 101, 30];

// using filter method
const result = numbers.filter(number => number % 2 == 0);
console.log(result);

// using find method
const result2 = numbers.find(number => number % 2 === 0);
console.log(result2);