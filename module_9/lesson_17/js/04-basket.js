const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");

const PRODUCT_LS = "basket";

const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) || [];
let totalCost;

if(products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
}

totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн.` : 'Your basket is empty';

container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClear);

function handleClear() {
    localStorage.removeItem(PRODUCT_LS);
    window.location.href = "./03-shop.html";
}

function createMarkup(arr) {
    return arr
        .map(({ img, name, price, qty }) => `
            <li class="cart-item">
                <img src="${img}" alt="${name}" class="product-img">
                <h2>${name}</h2>
                <p>Quantity: ${qty}</p>
                <p>total price: ${qty * price}</p>
            </li>
        `).join("");
}







