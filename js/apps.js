
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
    var removeLink = getElementsByClassName("removeLink");
    for (let i = 0; i < removeLink; i++){
        removeLink.addEventListener('click', function(){
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
            displayCart();
                if (cart.length == 0) {
                    localStorage.clear();
                }
        });
    }
}
function clearCart(){
    const clearCartButton = document.getElementById("clearCartButton");
    clearCartButton.addEventListener('.click', function(){
        cart = [];
        localStorage.clear();
        displayCart();
    })
}
clearCart(); 