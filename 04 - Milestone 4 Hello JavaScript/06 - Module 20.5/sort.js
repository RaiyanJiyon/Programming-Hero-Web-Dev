const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

let ascendingSort = numbersArr.sort((a, b) => a - b);
console.log(ascendingSort);

let descendingSort = numbersArr.sort((a, b) => b - a);
console.log(descendingSort);