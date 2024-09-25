const person = {
    name: 'John',
    age: 24,
    cgpa: 3.21
}

for (const key in person) {
    console.log(`${key}: ${person[key]}`)
}