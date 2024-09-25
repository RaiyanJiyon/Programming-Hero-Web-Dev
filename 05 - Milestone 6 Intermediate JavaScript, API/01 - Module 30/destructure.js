const person = {
    name: 'Raiyan',
    age: 24,
    cgpa: 3.21
};

const {name, age, cgpa} = person;
console.log(name);
console.log(age);
console.log(cgpa);

const {name: fullName, age: myAge, cgpa: myCg} = person;
console.log(fullName);
console.log(myAge);
console.log(myCg);

const numbers = [1, 2, 3,]
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const [n1, n2] = [10, 20];
console.log(n1);
console.log(n2);

function multiply(n1, n2) {
    return [n1 * 2, n2 * 2];
}

const [result1, result2] = multiply(10, 20);
console.log(result1);
console.log(result2); 