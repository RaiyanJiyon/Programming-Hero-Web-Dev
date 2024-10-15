const shop = {
    owner: 'John',
    address: {
        street: 'New Toy',
        city: 'New York',
        country: 'United State of America'
    },
    products: ['Laptop', 'Mobile', 'TV', 'Fridge'],
    isOpen: true,
    isOld: false
}
console.log(shop);

// convert shop object to JSON 
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// convert shopJSON to object 
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);