const person = {
    name: 'John',
    age: 43,
    gender: 'male',
    'favorite place': 'New York',
};

for (const key in person) {
    console.log(`${key} - ${person[key]}`);
}