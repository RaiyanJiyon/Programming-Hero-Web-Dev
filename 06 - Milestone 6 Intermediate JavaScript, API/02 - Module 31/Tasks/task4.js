const people = [
    {name: 'John', age: 30},
    {name: 'Lily', age: 20},
    {name: 'Roman', age: 40}
]

const totalAge = people.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0);
console.log(totalAge);