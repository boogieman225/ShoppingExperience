
let  cartCardContainer = document.querySelector("cartCardContainer");

function displayCartProducts (){
    clearStorageAndCart();
    cartCardContainer.innerHTML = "";

    if (0 < cart.length){
        cart.forEach( cartCard => {
            cartCard.innerHTML += `
                <div class="cartCard">
                <div class="cartCardFlex">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                    <p class="cartTitle">${individualCard.name}</p>
                    <p class="cartDescription">${individualCard.description}</p>
                    <div class="cartQuantity">
                        <input type="number" value="quantity" min="1" max="5" ><br>
                    </div>
                    <p class="cartPrice">&dollar; ${individualCard.price}</p>
                </div>
                <p class="textAlignRight removeMargins">
                    <a href="#" class="removeLink">Remove</a>
                </p>
                </div>
            `;
            removeFromCart();
        });
    }
    else {
        cartCardContainer.innerHTML = "<p id='emptyCart'>The cart is empty.</p>";
    };
};

displayCartProducts();








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