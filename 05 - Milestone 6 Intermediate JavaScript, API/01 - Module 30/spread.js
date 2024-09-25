const numbers1 = Math.max(1, 2, 3, 4, 5, 6, 7);
console.log(numbers1);

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.max(numbers2)); //this will show NaN
console.log(Math.max(...numbers2)); //this will work

const numbers3 = [5, 2, 5, 2, 11, 33, 111, 90];
const numbers4 = numbers3;
numbers4.push(1000);
console.log(numbers3); //in this approach it will also push 1000 in numbers3 array, means original array
console.log(numbers4);

// so we can add this using spread operator
const numbers5 = [5, 2, 5, 2, 11, 33, 111, 90];
const numbers6 = [...numbers5]
numbers6.push(1000);
console.log(numbers5);
console.log(numbers6);
