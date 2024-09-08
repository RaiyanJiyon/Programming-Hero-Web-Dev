/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/


function smallestName(array) {
    let smallest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (smallest.length > array[i].length) {
            smallest = array[i];
        }
    };
    return smallest;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallestName(heights2));