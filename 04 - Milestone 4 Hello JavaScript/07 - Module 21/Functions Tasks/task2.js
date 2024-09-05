/*
Task-2

Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function number(num) {
    if (num % 2 !== 0) {
        let result = num * 2;
        return result;
    } else {
        let result = num / 2;
        return result;
    };
};

console.log(number(2));
console.log(number(3));