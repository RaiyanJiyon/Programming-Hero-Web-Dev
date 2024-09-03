let sentence = "I am a good boy";
let reverse = '';

for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    reverse = letter + reverse;
}
console.log(reverse);


let comment = "There will be no illegal law in this country";

let reverseMethod = comment.split('').reverse().join('');
console.log(reverseMethod)