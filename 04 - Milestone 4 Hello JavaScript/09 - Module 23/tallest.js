function largestNumber(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    };
    return max;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 1, 102, 55];
console.log(largestNumber(numbers));