function addNumbers(num1, num2) {
    if (num1 === 10) {
        let num3 = 30; // Block-scoped variable
        var num4 = 40; // Function-scoped variable
    }
    console.log(num3); // Error: num3 is not defined
    console.log(num4); // Logs: 40
}

/*
Explanations:

- let: Creates block-scoped variables, accessible only within the block where they are defined.
- var: Creates function-scoped variables, accessible throughout the function where they are defined.
*/