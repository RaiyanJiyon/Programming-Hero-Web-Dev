const person = {
    name: 'John',
    age: 33,
    gender: 'male',
    birthYear: 2000,
    designation: 'developer'
}

console.log(person.name);
console.log(person['name']);

const personName = 'name';
console.log(person[personName])