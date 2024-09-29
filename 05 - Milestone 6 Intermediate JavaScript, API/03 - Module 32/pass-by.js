// pass by value example
function addNumber(num) {
    const number = num + 10; // This does not change the original variable
    return number;
}

const number = 10;
console.log(addNumber(number)); // Logs: 20
console.log(number); // Logs: 10


// pass by reference example
function displayInformation(people) {
    people.name = 'John'; // This changes the original object's property
    return people;
}

const people = {
    name: 'Randy',
    age: 45
};

console.log(displayInformation(people)); // Logs: { name: 'John', age: 45 }
console.log(people); // Logs: { name: 'John', age: 45 }