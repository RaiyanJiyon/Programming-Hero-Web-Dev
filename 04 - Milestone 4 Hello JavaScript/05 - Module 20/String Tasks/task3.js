// Check whether a string contains all the vowels a, e, i, o, u

let string = "We will make America great again.".toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
let containAllVowels = true;

for (const vowel of vowels) {
    if (!string.includes(vowel)) {
        containAllVowels = false;
        break;
    }
}

if (containAllVowels) {
    console.log("Yes, Its contains all vowels.");
} else {
    console.log("No, Its not contains all vowels.");
}