
const cardContainer =  document.querySelector("cardContainer");

function addProducts() {
    products.forEach(individualCard => {
        const cardTemplate = `
        <div id="cardContainer">
        <div class="products.card">
            <div id="${individualCard.id}">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>${individualCard.price}</p>
                    <button class="cartButton">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
        
        // ${individualCard.name}
        cardContainer.innerHTML += cardTemplate;
    });
}

addProducts();


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