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

const newProduct = {
    id: 6,
    name: "HeadPhones",
    price: 5.99,
    category: "Electronics",
    inStock: true
}

const allProducts = [...products, newProduct];
console.log(allProducts);