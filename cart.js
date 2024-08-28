// cart.js
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total;
});
 






/////////



// cart.js
// document.addEventListener('DOMContentLoaded', function() {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');

//     function updateCart() {
//         cartItems.innerHTML = '';
//         let total = 0;

//         cart.forEach((item, index) => {
//             const li = document.createElement('li');
//             li.className = 'cart-item';

//             const img = document.createElement('img');
//             img.src = item.image;  
//             img.alt = item.name;
//             img.className = 'cart-item-image'; 
//             img.style.width = '50px';  
//             img.style.height = 'auto';  

//             const name = document.createElement('span');
//             name.className = 'product-name'     
//             name.textContent = item.name;

            

//             const quantityContainer = document.createElement('div');
//             quantityContainer.className = 'quantity-container';

//             const minusButton = document.createElement('button');
//             minusButton.textContent = '-';
//             minusButton.className = 'quantity-minus';
//             minusButton.addEventListener('click', () => {
//                 if (item.quantity > 1) {
//                     item.quantity--;
//                 } else {
//                     cart.splice(index, 1);
//                 }
//                 updateCart();
//             });

//             const quantity = document.createElement('span');
//             quantity.textContent = item.quantity;
//             quantity.className = 'quantity';

//             const plusButton = document.createElement('button');
//             plusButton.textContent = '+';
//             plusButton.className = 'quantity-plus';
//             plusButton.addEventListener('click', () => {
//                 item.quantity++;
//                 updateCart();
//             });



//             quantityContainer.appendChild(minusButton);
//             quantityContainer.appendChild(quantity);
//             quantityContainer.appendChild(plusButton);

//             const price = document.createElement('span');
//             price.textContent = `${item.price * item.quantity}$`;
//             price.className = 'item-price';

//             const removeButton = document.createElement('button');
//             removeButton.textContent = 'Remove';
//             removeButton.className = 'remove-button';
//             removeButton.addEventListener('click', () => {
//                 cart.splice(index, 1);
//                 updateCart();
//             });

//             li.appendChild(img);  
//             li.appendChild(name);
//             li.appendChild(quantityContainer);
//             li.appendChild(price);
//             li.appendChild(removeButton);

//             cartItems.appendChild(li);
//             total += item.price * item.quantity;
//         });

//         cartTotal.textContent = total.toFixed(2);
//         localStorage.setItem('cart', JSON.stringify(cart));

//         if (cart.length === 0) {
//             cartItems.innerHTML = "<p>Your cart is empty.</p>";
//         }
//     }

//     updateCart();
// });








document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'cart-item';

            // Image
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.className = 'cart-item-image';
            img.style.height = 'auto';

            // Product Details Container
            const productDetails = document.createElement('div');
            productDetails.className = 'product-details';

            // Product Name
            const name = document.createElement('span');
            name.className = 'product-name';
            name.textContent = item.name;

            // Price
            const price = document.createElement('span');
            price.className = 'item-price';
            price.textContent = `${item.price * item.quantity}$`;

            // Quantity Container
            const quantityContainer = document.createElement('div');
            quantityContainer.className = 'quantity-container';

            const minusButton = document.createElement('button');
            minusButton.textContent = '-';
            minusButton.className = 'quantity-minus';
            minusButton.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });

            const quantity = document.createElement('span');
            quantity.className = 'quantity';
            quantity.textContent = item.quantity;

            const plusButton = document.createElement('button');
            plusButton.textContent = '+';
            plusButton.className = 'quantity-plus';
            plusButton.addEventListener('click', () => {
                item.quantity++;
                updateCart();
            });

            quantityContainer.appendChild(minusButton);
            quantityContainer.appendChild(quantity);
            quantityContainer.appendChild(plusButton);

            // Remove Button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });

            // Append all elements to the product details container
            productDetails.appendChild(name);
            productDetails.appendChild(price);
            productDetails.appendChild(quantityContainer);
            productDetails.appendChild(removeButton);

            // Append the image and product details to the list item
            li.appendChild(img);
            li.appendChild(productDetails);

            // Append the list item to the cart items list
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        // Update total price
        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem('cart', JSON.stringify(cart));

        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
        }
    }

    updateCart();
});
