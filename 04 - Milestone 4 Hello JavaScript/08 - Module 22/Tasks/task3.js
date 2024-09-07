/*
Task-3:
Write a function to count the number of vowels in a string.
*/

function countVowelsNumber(string) {
    let vowels = 'aeiou';
    let count = 0;

    for (const element of string.toLowerCase()) {
        if (vowels.includes(element)) {
            count++;
        };
    };
    console.log("Vowels present in string is - ", count);
};

countVowelsNumber('Raiyan Jiyon');