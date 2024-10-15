// Truthy values
// 1. true
// 2. Any number (+ve, -ve) other than 0
// 3. Any non-empty string
// 4. '0', 'false' (non-empty strings)
// 5. {}
// 6. []

// Falsy values
// 1. false
// 2. 0
// 3. '' (empty string)
// 4. undefined
// 5. null

let x = [5, 6];
console.log(x); // Logs: [5, 6]
if (x) {
    console.log('value of x is truthy'); // This will execute
} else {
    console.log('value of x is falsy');
}

const a = null;
// null is falsy
if (a) {
    console.log('True');
} else {
    console.log('False'); // This will execute
}

const z = { class: 9 };
// Non-empty objects are truthy
if (z) {
    console.log('True'); // This will execute
} else {
    console.log('False');
}

const b = 0;
// 0 is falsy
if (b) {
    console.log('True');
} else {
    console.log('False'); // This will execute
}

const name = '';
// Empty string is falsy
if (name) {
    console.log('True');
} else {
    console.log('False'); // This will execute
}

/*
- Arrays ([]) and objects ({}) are always truthy, even if empty.
- null, 0, and empty strings ('') are falsy.
*/

const numbers  = []; // Empty array is truly

if (numbers) {
    console.log('True'); // This will execute
} else {
    console.log('False');
}

const peoples  = {}; // Empty object is truly

if (peoples) {
    console.log('True'); // This will execute
} else {
    console.log('False');
}