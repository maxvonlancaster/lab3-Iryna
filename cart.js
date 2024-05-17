let cartItems = [];

function addToCart(postId) {
    const post = posts.find(item => item.id === postId);
    if (post) {
        const existingCartItem = cartItems.find(item => item.id === postId);
        if (existingCartItem) {
            existingCartItem.quantity += 1; 
        } else {
            post.quantity = 1; 
            cartItems.push(post);
        }
    } 
}

function increaseQuantity(postId) {
    const cartItem = cartItems.find(item => item.id === postId);
    if (cartItem) {
        cartItem.quantity += 1; 
        updateCart(); 
    }
}

function decreaseQuantity(postId) {
    const cartItem = cartItems.find(item => item.id === postId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1; 
        updateCart(); 
    }
}
function clearCart() {
    cartItems = []; 
    updateCart(); 
}
function updateCart() {
    const cartContent = document.getElementById('cartContent');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    cartContent.innerHTML = '';

    cartItems.forEach(function(item) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" height = "200px" width = "225px">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>${item.price} x ${item.quantity}</p>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="decreaseQuantity(${item.id})">-</button>
            </div>
        `;
        cartContent.appendChild(cartItem);

        totalPrice += parseInt(item.price) * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function openCartModal() {
    updateCart(); 
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}