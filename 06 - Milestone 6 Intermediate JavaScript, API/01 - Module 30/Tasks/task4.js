const maxNumbers = (numbers1, numbers2) => {
    const merged = [...numbers1, ...numbers2];
    const maxNumber = Math.max(...merged);
    return maxNumber;
}

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

console.log(maxNumbers(numbers1, numbers2));

