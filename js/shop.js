
const cardContainer =  document.querySelector("#cardContainer");
let checkoutButton = document.getElementById("#checkoutButton");

function addProducts() {
    products.forEach(individualCard => {
        cardContainer.innerHTML +=  `
        <div class="card" id="cardNumber${individualCard.id}">
            <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton" id="${individualCard.id}">Add to Cart</button>
                </div>
        </div>
        `;
    });
}

addProducts();

function saveToLocalStorage(){
    let cartButton = document.getElementsByClassName('cartButton');
    for (let i = 0; i < cartButton.length; i++) {
        cartButton[i].addEventListener('click', function() {  
            let selectedProduct = products.find( (product) => product.id == cartButton[i].id);
            cart.push(selectedProduct);
            console.log(selectedProduct);
            localStorage.setItem("CART", JSON.stringify(cart) );
            displayCart();
        });
    }
}

saveToLocalStorage();

function displayCart(){
    clearStorageAndCart();
    sideBarContainer.innerHTML = "";
    cart.forEach(cartItem => {
        console.log(sideBarContainer);
        sideBarContainer.innerHTML += `
        <div class="tableRow">
            <div class="tableCell">
                ${cartItem.name}
            </div>
            <div class="tableCell">
                &dollar; ${cartItem.price}
            </div>
        </div>
        <div class="tableRow">
            <div class="tableCell borderBottom">

            </div>
            <a id="${cartItem.id}" href="#" class="tableCell borderBottom removeLink">Remove</a>
        </div>
    `;
    });
    removeFromCart();
}

displayCart();

checkoutButton.addEventListener('click', function(){
    window.location.assign(cart.html);
})