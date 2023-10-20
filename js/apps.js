
let cart = [];
const sideBarContainer = document.querySelector("#sideBarContainer");

function clearStorageAndCart(){
    cart = [];
    let currentStorage = JSON.parse(localStorage.getItem('CART'));
    if(currentStorage) {
        cart = currentStorage;
    }
}


function removeFromCart (){
    var removeLink = document.getElementsByClassName("removeLink");
    console.log("Remove!");
    for (let i = 0; i < removeLink.length; i++){
        removeLink[i].addEventListener('click', function(event){
            clearStorageAndCart();
            let selectedProduct = cart.find( (cartItem) => cartItem.id == event.target.id);
            var itemIndex;
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == selectedProduct.id) {
                    itemIndex = cart.indexOf(cart[j]);
                }
            }
            cart.splice(itemIndex, 1);
            localStorage.setItem('CART', JSON.stringify(cart) );
            
            if (typeof displayCart === "function") {
                displayCart();
                displayCartProducts();
                displayOrderSummary();
            }
            if (typeof displayCartProducts === "function") {
                displayOrderSummary();
                displayCartProducts();
                console.log("Hello Kevin!");
            }
            if (cart.length == 0) {
                localStorage.clear();
            }
        });
    }
}

function clearCart(){
    const clearCartButton = document.getElementById("clearCartButton");
    clearCartButton.addEventListener('click', function(){
        cart = [];
        localStorage.clear();

        if (typeof displayCart === "function") {
            displayCart();
        }
        if (typeof displayCartProducts === "function") {
            displayCartProducts();
            displayOrderSummary();
        }
       
    });
}
clearCart(); 

function updateQuantity(){
    let quantityNumberInput = document.getElementsByClassName("quantityNumberInput");

    for (let i = 0; i < quantityNumberInput.length; i++){
        addEventListener('change', (event) => {
            let quantityChanged = quantityNumberInput[i].value;
            if(quantityChanged > 5){
                quantityChanged = 5;
            }
            let itemToChange = cart.find( (item) => item.id == event.target.id);
            itemToChange.quantity = +quantityChanged;
            localStorage.setItem("CART", JSON.stringify(cart));     // update local storage
            if(typeof displayOrderSummary == "function"){
                displayOrderSummary();
            }
        });
    }
}


$(document).ready(function(){
    let sidebarOrigin = $('aside').offset();

    $('window').scroll(function(){
        let scrollPosition = $('html').scrollTop();
        if(sidebarOrigin.top < scrollPosition){
            $('aside').addClass('sticky');
            if($('aside').hasClass('sticky')){
                $('aside').css('width', '17.9%');
            }
        }
        else{
            $('aside').removeClass('sticky');
            $('aside').css('width', '20%');
        }
    });
});