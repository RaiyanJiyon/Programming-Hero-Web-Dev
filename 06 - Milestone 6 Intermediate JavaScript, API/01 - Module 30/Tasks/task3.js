const calculateNumbers = (numbers) => {
    const squareNumbers = numbers.map(number => number ** 2);
    let sum = 0;

    for (const element of squareNumbers) {
        sum += element;
    }
    const avg = sum / squareNumbers.length;
    return avg
}

const numbers = calculateNumbers([1, 2, 3, 4]);
console.log(numbers);