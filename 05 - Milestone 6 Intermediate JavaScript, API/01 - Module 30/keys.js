const person = {
    name: 'John',
    age: 24,
    cgpa: 3.21
}

console.log(person);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const pairs = Object.entries(person); //2D Array
console.log(pairs);

// delete person.name;
// console.log(person)

// delete with destruction
// const {name, ...rest} = person
// console.log(rest)

const freeze = Object.freeze(person);
delete person.age; //this will not delete
console.log(person); 