const newArray = [];

const evenLength = (array) => {
    array.forEach(element => {
        if (element.length % 2 === 0) {
            newArray.push(element);
        }
    });
}

evenLength(['Tom', 'John', 'Roman', 'Wick']);
console.log(newArray);

