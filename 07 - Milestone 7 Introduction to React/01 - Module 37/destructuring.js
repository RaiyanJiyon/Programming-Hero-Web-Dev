const numbers = [1, 2, 3, 4, 5];

const [num1, num2] = numbers;
console.log(num1, num2);

const employee = {
    name: 'John',
    age: 33,
    designation: 'Developer',
    language: ['JavaScript', 'Python', 'Java'],
    others: {
        height: '6 feet 1 inch',
        weight: 82,
        color: 'brown'
    }
}

const {name, age} = employee;
console.log(name, age);

const {height, weight} = employee.others;
console.log(height, weight);