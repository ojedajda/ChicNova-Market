let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    displayCart();
    calculateTotal();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartDiv.appendChild(itemDiv);
    });
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

