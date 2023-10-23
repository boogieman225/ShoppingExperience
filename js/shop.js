
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
    let cartButton = document.getElementsByClassName('cartButton');
    for (let i = 0; i < cartButton.length; i++) {
        cartButton[i].addEventListener('click', function() {  
            let selectedProduct = products.find( (product) => product.id == cartButton[i].id);
            let cartItemSearch = cart.find( (cartItem) => cartItem.id == selectedProduct.id);
            if (cartItemSearch){
                cartItemSearch.quantity++;
            } else{
                cart.push(selectedProduct);
            }
            console.log(selectedProduct);
            localStorage.setItem("CART", JSON.stringify(cart) );
            displayCart();
        });
    };
};

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
        <input class="quantityNumberInput" id="${cartItem.id}" type="number" value="${cartItem.quantity}" min="1" max="5"></input>
        </div>
        <a id="${cartItem.id}" href="#" class="tableCell borderBottom removeLink">Remove</a>
        </div>
        `;
    });
    removeFromCart();
    updateQuantity();
}

displayCart();

let checkoutButton = document.getElementById("checkoutButton");


checkoutButton.addEventListener('click', function(){
    window.location = 'cart.html';
});


// paginate step


let productsPerPage = 6;
let currentPage = 1;
let pagedResults = [];
let totalProducts = products.length;

function paginate(){
    let end = currentPage * productsPerPage;
    let start =  end - productsPerPage; 
    
    pagedResults = products.slice(start, end);
    
    $('#cardContainer').empty();
    
    $.each(pagedResults, function(index, individualCard) {
        $('#cardContainer').append(`

            <!-- Card Container -->

            <div class="card" id="cardNumber${individualCard.id}">
                <img src="${individualCard.image}" alt="${individualCard.description}">
                <div class="cardText">
                    <h4>${individualCard.name}</h4>
                    <p>${individualCard.description}</p>
                    <p>&dollar; ${individualCard.price}</p>
                    <button class="cartButton" id="${individualCard.id}">Add to Cart</button>
                </div>
            </div>
            
            <!-- End Card Container -->

        `);
    });

    // disable prev button on first page

    if(currentPage <=1){
        $('#prevButton').attr('disabled', true);
    }
    else{
        $('#prevButton').attr('disabled', false);
    }

    // disable next button on last page

    if((currentPage * productsPerPage) >= totalProducts){
        $('#nextButton').attr('disabled', true);
    }
    else{
        $('#nextButton').attr('disabled', false);
    }
}

paginate();


// paginate step end


$(document).ready(function() {

    $('#nextButton').click(function(){
        if((currentPage * productsPerPage) <= totalProducts){ // currentPage * productsPerPage -> This calculates what the last product on the current page is
            currentPage++;
            paginate();
            saveToLocalStorage();
            fadeButtons();
        }
    });
    $('#prevButton').click(function(){
        if (currentPage > 1) {
            currentPage--;
        }
        paginate();
        saveToLocalStorage();
        fadeButtons();
    });
});

