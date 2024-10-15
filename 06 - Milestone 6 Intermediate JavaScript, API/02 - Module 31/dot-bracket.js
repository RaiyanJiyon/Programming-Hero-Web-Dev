const person = {
    name: 'John',
    age: 23,
    '123': 123,
    'gender-type': 'male'
}

console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person['age']);
// console.log(person.'123'); --> throw error
console.log(person['123']);
console.log(person['gender-type']);
// console.log(person.'gender-type');  --> throw error
