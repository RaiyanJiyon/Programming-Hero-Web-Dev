const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 29.99,
        category: "Electronics",
        inStock: true
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        price: 59.99,
        category: "Audio",
        inStock: false
    },
    {
        id: 3,
        name: "Coffee Maker",
        price: 89.99,
        category: "Kitchen",
        inStock: true
    },
    {
        id: 4,
        name: "Office Chair",
        price: 199.99,
        category: "Furniture",
        inStock: true
    },
    {
        id: 5,
        name: "Yoga Mat",
        price: 15.99,
        category: "Fitness",
        inStock: false
    }
];

// map
const productsName = products.map((product) => product.name);
console.log(productsName);

// forEach
products.forEach((product) => console.log(product.category));

// filter
const cheapestProduct = products.filter((product) => product.price < 50);
console.log(cheapestProduct);

// find
const lowestPriceProduct = products.find((product) => product.price < 50);
console.log(lowestPriceProduct);