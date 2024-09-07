function removeDuplicated(array) {
    let newArray = [];
    for (const element of array) {
        if (newArray.includes(element) === false) {
            newArray.push(element);
        };
    }
    console.log(newArray);
}


const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

removeDuplicated(biryaniKhor);
removeDuplicated(numbers);


