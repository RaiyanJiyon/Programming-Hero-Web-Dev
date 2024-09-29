// Initialize a primitive variable 'p' with the value 10
let p = 10;

// Assign the value of 'p' to another primitive variable 's'
let s = p;

// Log the values of 'p' and 's' (should both be 10)
console.log(p, s);

// Change the value of 's' to 20
// This will not affect 'p' because 's' is a copy of the primitive value
s = 20;
console.log(p, s); // Logs 10, 20

// Initialize an object 'person' with a property 'job'
const person = {
    job: 'Frontend Developer'
};

// Assign the reference of 'person' to 'developer'
let developer = person;

// Changing the 'job' property of 'developer' also affects 'person'
// because both variables reference the same object
developer.job = 'Full stack Developer';
console.log(person, developer); // Logs { job: 'Full stack Developer' }, { job: 'Full stack Developer' }


/*
Primitive Data Types: When you copy a primitive value, you create a completely separate copy. Changing one does not affect the other.
Non-Primitive Data Types: When you copy an object, you copy the reference, not the actual object. Both variables point to the same object, so changes via one reference affect the other.
*/