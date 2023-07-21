
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