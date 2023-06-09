
let cart = []
const sideBarContainer = document.querySelectorAll(sideBarContainer);

function clearStorageAndCart(){
    cart = [];
    let currentStorage = JSON.parse(localStorage.getItem('CART'));
    if(currentStorage) {
        cart [currentStorage];
    }
}
