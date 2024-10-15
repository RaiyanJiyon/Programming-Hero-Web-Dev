const products = [
    {id: 101, name: 'iPhone', price: 50000},
    {id: 102, name: 'OnePlus', price: 40000},
    {id: 103, name: 'Samsung', price: 30000},
];


// map
const result1 = products.map(product => product.name);
// console.log(result1)

// for-Each
const result2 = products.map(product => console.log(product.price));

// filter
const result3 = products.filter(product => product.price > 30000);
console.log(result3);

// find
const result4 = products.find(product => product.price > 30000);
// console.log(result4)

// reduce
const result5 = products.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
// console.log(result5);
