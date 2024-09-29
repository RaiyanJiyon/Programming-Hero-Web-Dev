// 1. Variable that is not initialized will give undefined
let a;
console.log(a); // Logs: undefined

// 2. Function with no return statement
const displayInformation = () => {
    let b = 10;
    // No return statement
}
console.log(displayInformation()); // Logs: undefined

// 3. Parameter that is not passed will be undefined
const addNumbers = (a, b) => {
    const result = a + b;
    console.log(result);
    // No return statement
};
addNumbers(10); // Logs: NaN because b is undefined

// 4. If return has nothing on the right side, it will return undefined
function noNegativeNumber(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return; // Returns undefined
    } else {
        return num1 + num2;
    }
}
const result = noNegativeNumber(10, -20);
console.log(result); // Logs: undefined

// 5. Property that doesn't exist on an object will give you undefined
const person = {
    name: 'John',
    age: 44
};
console.log(person.gender); // Logs: undefined

// 6. Accessing array elements outside of the index range
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[5]); // Logs: undefined

// 7. Deleting an element inside an array
delete numbers[2];
console.log(numbers); // Logs: [1, 2, <1 empty item>, 4, 5]

// 8. Set a value directly to undefined
const num = undefined;
console.log(num); // Logs: undefined