// Count how many times a string has the letter a or A

let name = 'Akshay Kumar';
let count = 0;

for (const element of name) {
    if (element === 'a' || element === 'A') {
        count++;        
    };
};

console.log(count);