
const cardContainer =  document.querySelector("#cardContainer");

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
    let cartButtons = document.getElementsByClassName('cartButton');
    for (var i = 0; i < cartButtons.length; i++) {
        cartButtons[i].addEventListener('click', function() {
        let selectedProduct = products.find( (product) => product.id == cartButton[i].id);
        cart.push(selectedProduct);
        localStorage.setItem("CART", JSON.stringify(cart) );
        });
        
    }
}
function displayCart(){

}

displayCart();
clearStorageAndCart();
sideBarContainer.innerHTML = "";

function displayCart(){
    
}
/*

//</div> Card Container
//
//<div id="cardContainer">
   <div class="card">
        <div id="cardNumber1">
            <img src="images/shop/thumbnails/ClownUmbrella_Thumb.jpg" alt="Clown figurine">
            <div class="cardText">
                <h4>Clown Umbrella</h4>
                <p>A porcelain figurine of a clown holding an umbrella and riding a unicycle</p>
                <p>&dollar; 29.95</p>
                <button class="cartButton">Add to Cart</button>
            </div>
        </div>
    </div>
*/