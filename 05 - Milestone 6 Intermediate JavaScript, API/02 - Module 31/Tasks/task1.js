const numbers = [1, 3, 5, 7, 9];

// using for loop
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let even = numbers[i] + 1;
    evenNumbers.push(even);
}
console.log(evenNumbers);

// using map method
const evenResult = numbers.map(number => number + 1);
console.log(evenResult);