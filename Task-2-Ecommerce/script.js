let quantity = 1;
let cart = 0;

function increase() {
    quantity++;
    document.getElementById("quantity").textContent = quantity;
}

function decrease() {

    if (quantity > 1) {
        quantity--;
    }

    document.getElementById("quantity").textContent = quantity;
}

function addToCart() {

    cart += quantity;

    document.getElementById("cartCount").textContent = cart;

    document.getElementById("message").textContent =
        quantity + " item(s) added to cart!";
}

