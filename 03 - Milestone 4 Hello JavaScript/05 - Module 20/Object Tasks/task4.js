// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;

for (const key in student) {
    if (student.hasOwnProperty(key)) {
        count++;
    };
};
console.log(count);
