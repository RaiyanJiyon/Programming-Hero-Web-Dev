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

console.log(products);

const productsJson = JSON.stringify(products);
console.log(productsJson);

const productsObject = JSON.parse(productsJson);
console.log(productsObject);

const loadData = async () => {
    const response = await fetch('');
    const jsonData = await response.json();
}