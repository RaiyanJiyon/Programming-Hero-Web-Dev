function addNumbers(num1, num2, num3, num4, num5) {
    console.log(arguments); // Arguments is an array-like object
    // arguments.push(5); // This won't work because arguments is not a true array

    // Convert arguments to an array
    const newArray = [...arguments];
    console.log(newArray); // Logs: [1, 2, 3, 4, 5]

    const result = num1 + num2 + num3 + num4 + num5;
    return result;
}

console.log(addNumbers(1, 2, 3, 4, 5)); // Logs: 15