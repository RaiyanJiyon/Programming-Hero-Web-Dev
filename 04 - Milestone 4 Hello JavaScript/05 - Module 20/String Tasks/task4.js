// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let string = "X-men are now x-men and Y-men are now y-men";

string = string.replace(/x/g, 'y');
string = string.replace(/X/g, 'Y');
string = string.replace(/y/g, 'x');
string = string.replace(/x/g, 'X');

console.log(string);
