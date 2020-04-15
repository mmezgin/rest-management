const menu = document.getElementById("menu");
const checkout = document.getElementById("checkout");

eventListeners();


function eventListeners() {
    menu.addEventListener("click", getMenu)
    checkout.addEventListener("click", getCheck);
}