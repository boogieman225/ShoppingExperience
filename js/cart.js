
const cartCardContainer = document.querySelector("#cartCardContainer");

function displayCartProducts(){
    clearStorageAndCart();
    cartCardContainer.innerHTML = "";

    if (0 < cart.length){
        cart.forEach(individualCard => {
            cartCard.innerHTML += `
                <div class="cartCard">
                <div class="cartCardFlex">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                    <p class="cartTitle">${individualCard.name}</p>
                    <p class="cartDescription">${individualCard.description}</p>
                    <div class="cartQuantity">
                        <input type="number" value="${individualCard.quantity}" min="1" max="5" ><br>
                    </div>
                    <p class="cartPrice">&dollar; ${individualCard.price}</p>
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


function calculateOrderSummary(){
    let subtotal = 0,
        shipping = 0,
        tax = 0,
        total = 0;
    
    clearStorageAndCart();
    cart.forEach((cartItem) => {
        subtotal += cartItem.price;
        shipping += 1;
    });

    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax;

}


function displayOrderSummary(){
    calculateOrderSummary();
    sideBarContainer.innerHTML += `
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

        <div id="cartButtons">
            <button id="clearCartButton">
                Clear Cart
            </button>
            <button id="checkoutButton">
                Checkout
            </button>
        </div>
  `;

}

displayOrderSummary();


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