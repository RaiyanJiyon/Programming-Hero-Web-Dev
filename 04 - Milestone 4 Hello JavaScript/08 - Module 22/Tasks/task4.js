/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/


function largestWord(string) {
    let words = string.split(' ');
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        };
    };
    console.log(longestWord);
}

largestWord('I am learning Programming to become a programmer');