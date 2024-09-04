function reverse(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.unshift(array[i]);
    };
    return output;
};

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    };
    return output;
};

console.log(reverseArray([10, 20, 30, 40, 50]));