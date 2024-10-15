const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11, -2, -5];

// filter method returns an array. if the condition is not matched, it will return an empty array;
const result = numbers.filter(number => number > 3);
console.log(result);

const friends = ['Tom', 'Jerry', 'John', 'Roman'];

const result2 = friends.filter(friend => friend.length % 2 !== 0);
console.log(result2);