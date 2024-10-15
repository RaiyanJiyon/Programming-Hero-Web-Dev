const data = [{id: 1, name: 'John', address: 'Dhaka'}];
// console.log(data[0].name);


const product = {
    count: 5000,
    data: [
        {
            id: 101, name: 'iPhone', price: 5000,
        },
        {
            id: 102, name: 'mackBook', price: 40000,
        }
    ]
};

// console.log(product.data[0].name)
// console.log(product.data[1].name)

const user = {
    name: 'Roman',
    address: {
        street: {
            firstPlace: 'Rayerbag',
            secondPlace: 'Jatrabari',
            thirdPlace: 'Matuail'
        },
        city: 'Dhaka'
    }
}

// console.log(user.address.street.secondPlace);

const user2 = {
    name: 'Alice',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

console.log(user2.address.street?.city)