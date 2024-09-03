// Count how many times a string has the letter a

let name = 'Jason Mas';
let count = 0;

for (const element of name) {
    if (element === 'a') {
        count++;
    };
};
console.log(count);