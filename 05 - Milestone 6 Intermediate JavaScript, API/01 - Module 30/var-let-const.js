let num1 = 10;
num1 = 50;
console.log(num1);

const num2 = 10;
// num2 = 50; --> it will throw error
console.log(num2);

const numbers = [1, 2, 3, 4, 5, 6];
// numbers = [5, 6, 7, 8] --> this will throw error
numbers[2] = 500;
numbers.push(7, 8, 9);
console.log(numbers);

const person = {
    name: 'John',
    age: 23
};

/*
person = {
    name: 'Raiyan'
}
--> this will throw error */ 
person.name = 'Raiyan'
console.log(person);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += i;
}

console.log(sum);