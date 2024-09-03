// Capitalize Every first Letter of each word in a String

let string = "a new Tomorrow starts today";
let splitString = string.split(' ');
// console.log(splitString);
let capitalizeFirstLetter = splitString.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(' ');

console.log(capitalizeFirstLetter);

