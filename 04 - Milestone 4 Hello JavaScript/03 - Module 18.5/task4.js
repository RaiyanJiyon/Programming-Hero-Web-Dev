/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

let fruits1 = ["Apple", "Mango", "Banana"];
let fruits2 = [];
let fruit = "Apple";

console.log(Array.isArray(fruits1));
console.log(Array.isArray(fruits2));
console.log(Array.isArray(fruit));