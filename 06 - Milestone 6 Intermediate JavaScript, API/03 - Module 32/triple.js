const a = 1;
const boolean = true;

// == performs type coercion, so true is coerced to 1
if (a == boolean) {
    console.log('Values are same'); // This will execute
} else {
    console.log('Values are not same');
}

const first = [];
const second = [];

// Non-primitive data types (arrays) are compared by reference
if (first == second) {
    console.log('Values are same');
} else {
    console.log('Values are not same'); // This will execute
}

const third = [];
const fourth = third;

// Both variables reference the same array
if (third == fourth) {
    console.log('Values are same'); // This will execute
} else {
    console.log('Values are not same');
}

/*
- Type Coercion with ==: JavaScript converts true to 1 when using ==, so 1 == true evaluates to true.
- Reference Comparison: Arrays and objects are compared by their reference, not by their content. first and second are different arrays, so they are not the same. third and fourth reference the same array, so they are considered the same.
*/