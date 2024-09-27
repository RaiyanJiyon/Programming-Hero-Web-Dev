const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

console.log(result);