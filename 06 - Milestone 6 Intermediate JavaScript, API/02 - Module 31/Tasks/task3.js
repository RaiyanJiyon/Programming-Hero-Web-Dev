const instructors = [
    {name: 'John', age: 30, position: 'senior'},
    {name: 'Lily', age: 20, position: 'junior'},
    {name: 'Roman', age: 40, position: 'senior'}
]

const result = instructors.filter(instructor => instructor.position === 'senior');
console.log(result);