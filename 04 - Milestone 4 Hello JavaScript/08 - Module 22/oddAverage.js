/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/

function oddAverage(array) {
    let sum = 0
    let count = 0
    for (const element of array) {
        // console.log(element);
        if (element % 2 !== 0) {
            sum += element;
            count++;
        }
    };

    if (count === 0) {
        console.log("No odd numbers in the array.");
    } else {
        let average = sum / count;
        console.log(average);
    }
}

oddAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]);