document.getElementById('submit-btn')
    .addEventListener('click', () => {
        const productInput = document.getElementById('product-name');
        const quantityInput = document.getElementById('product-quantity');

        const product = productInput.value;
        const quantity = quantityInput.value;

        displayProductsDetails(product, quantity)
        saveLocalStorage(product, quantity)

    });

const displayProductsDetails = (product, quantity) => {
    const productList = document.getElementById('product-details-list');

    const item = document.createElement('li');
    item.innerHTML = `Product name - ${product} & Product quantity - ${quantity}`;
    
    productList.append(item);
}

const getItemInLocalStorage = () => {
    let cart = {};
    const product = localStorage.getItem('cart');

    if (product) {
        cart = JSON.parse(product);
    }
    return cart;
}

const saveLocalStorage = (product, quantity) => {
    const cart = getItemInLocalStorage();
    cart[product] = quantity;

    const stringify = JSON.stringify(cart);

    localStorage.setItem('cart', stringify);
}

const displayCart = () => {
    const cart = getItemInLocalStorage();
    for (const key in cart) {
        const product = key;
        const quantity = cart[key];
        displayProductsDetails(product, quantity)
    }
}

displayCart();