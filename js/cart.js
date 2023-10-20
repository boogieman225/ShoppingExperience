
const cartCardContainer = document.querySelector("#cartCardContainer");

function displayCartProducts(){
    clearStorageAndCart();
    cartCardContainer.innerHTML = "";

    if (0 < cart.length){
        cart.forEach(cartItem => {
            cartCardContainer.innerHTML += `
                <div class="cartCard">
                <div class="cartCardFlex">
                <img src="${cartItem.image}" alt="${cartItem.description}">
                    <p class="cartTitle">${cartItem.name}</p>
                    <p class="cartDescription">${cartItem.description}</p>
                    <div class="cartQuantity">
                        <input type="number" value="${cartItem.quantity}" min="1" max="5" class="quantityNumberInput" id="${cartItem.id}"><br>
                    </div>
                    <p class="cartPrice">&dollar; ${cartItem.price}</p>
                </div>
                <p class="textAlignRight removeMargins">
                    <a href="#" id="${cartItem.id}" class="removeLink">Remove</a>
                </p>
                </div>
            `;
            removeFromCart();
        });
    }
    else {
        cartCardContainer.innerHTML = "<p id='emptyCart'>The cart is empty.</p>";
    }
}

displayCartProducts();

let subtotal = 0;
let shipping = 0; 
let tax = 0;
let total = 0;

function calculateOrderSummary(){
    clearStorageAndCart();
    
    subtotal = 0;
    shipping = 0;
    tax = 0;
    total = 0;

    cart.forEach((cartItem) => {
        subtotal += cartItem.price * cartItem.quantity;
        shipping += 1 * cartItem.quantity;
    });
    
    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax; 
}


function displayOrderSummary(){
    updateQuantity();
    calculateOrderSummary();
    console.log(total);
    sideBarContainer.innerHTML = `
    <div class="tableRow">
    <div class="tableCell">
    Subtotal
    </div>
    <div class="tableCell">
    &dollar; ${subtotal.toFixed(2)}
    </div>
    </div>
    <div class="tableRow">
    <div class="tableCell">
    Shipping
    </div>
    <div class="tableCell">
    &dollar; ${shipping.toFixed(2)}
    </div>
    </div>
    <div class="tableRow">
    <div class="tableCell">
    Tax
    </div>
    <div class="tableCell">
    &dollar; ${tax.toFixed(2)}
    </div>
    </div>
    <div class="tableRow">
    <div class="tableCell">
    Total
    </div>
    <div class="tableCell">
    &dollar; ${total.toFixed(2)}
    </div>
    </div>
    
    `;
    
    console.log(subtotal);      // log subtotal
}

displayOrderSummary();

$(document).ready(function(){
    $('#checkoutThankYou').hide();
    $('#checkoutButton').click(function(){
        if(subtotal == 0){
            $('#checkoutThankYou').html('The cart is currently empty.');
            $('#checkoutButton').slideDown();
        }
        else{
            $('#checkoutButton').slideDown();
        }
    });
});


/*
CART
</div>
<div id="sideBarContainer">

</div>
<div id="cartButtons">
    <button id="clearCartButton">
        Clear Cart
    </button>
    <button id="checkoutButton">
        Checkout
    </button>
*/






/*

<div class="cartCard">
<div class="cartCardFlex">
    <img src="images/shop/thumbnails/ClownUmbrella_Thumb.jpg" alt="Clown figurine">
    <p class="cartTitle">Clown Umbrella</p>
    <p class="cartDescription">A porcelain figurine of a clown holding an umbrella and riding a unicycle</p>
    <div class="cartQuantity">
        <input type="number" value="1" min="1" max="5" ><br>
    </div>
    <p class="cartPrice">&dollar; 29.95</p>
</div>
<p class="textAlignRight removeMargins">
    <a href="#" class="removeLink">Remove</a>
</p>
</div>

*/