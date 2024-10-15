const submitBtn = () => {
    const productInput = document.getElementById('product-name');
    const productValue = productInput.value;

    const quantityInput = document.getElementById('product-quantity');
    const quantityValue = quantityInput.value;

    if (productValue && quantityValue) {
        localStorage.setItem(productValue, quantityValue);
        
    }
}