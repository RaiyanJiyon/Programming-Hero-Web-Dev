/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/


function lowerNumber(array) {
    let lower = array[0];

    for (let i = 1; i < array.length; i++) {

        if (lower > array[i]) {
            lower = array[i];
        }
    };
    
    return lower;
};

const heights2 = [167, 190, 120, 165, 137, 22, 24];
console.log(lowerNumber(heights2))