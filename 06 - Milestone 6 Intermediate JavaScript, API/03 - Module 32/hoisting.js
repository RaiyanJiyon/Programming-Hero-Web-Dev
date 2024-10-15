// This works because of function hoisting
console.log(addNumbers(10, 20)); // Logs: 30

// This will cause an error because sumNumbers is not hoisted
console.log(sumNumbers(10, 20)); // Error: Cannot access 'sumNumbers' before initialization

function addNumbers(num1, num2) {
    return num1 + num2;
}

// Function expressions are not hoisted
const sumNumbers = (num1, num2) => {
    return num1 + num2;
}

/*
Explanations:

- Function Declarations: These are hoisted, meaning they can be called before they are defined in the code.
- Function Expressions (Arrow Functions): These are not hoisted. You must define them before calling them, otherwise you will get a ReferenceError.
*/