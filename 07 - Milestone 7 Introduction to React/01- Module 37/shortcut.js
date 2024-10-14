// shortcut to convert numbers to a string
let num = 55;
console.log(num);
num = num + '';
console.log(num); 

// shortcut to convert string to a number
let number = '555';
console.log(number);
number = +number;
console.log(number);

let isActive = true;
const showDisplay = () => console.log('Show Display');
const hideDisplay = () => console.log('Hide Display');

isActive ? showDisplay() : hideDisplay();

isActive && showDisplay();

isActive = !isActive;
console.log(isActive);
