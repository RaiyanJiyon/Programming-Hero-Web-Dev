/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

// °F = (9/5) °C+32.

function celsius_to_fahrenheit(celsius) {
    let fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;
};

console.log(celsius_to_fahrenheit(20));

