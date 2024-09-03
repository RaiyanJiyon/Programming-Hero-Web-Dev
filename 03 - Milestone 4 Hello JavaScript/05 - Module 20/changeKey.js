const person = {
    name: 'John',
    age: 43,
    gender: 'male',
    'favorite place': 'New York',
};


// change the key value
let newName = 'name';
person[newName] = 'John Wick';
console.log(person)