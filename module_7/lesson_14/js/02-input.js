/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const inputEl = document.querySelector(".js-user-name");

// inputEl.addEventListener("input", handleInput);


// function handleInput(event) {
//     console.log(event.currentTarget.value);
// }


/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */


inputEl.addEventListener("blur", handleBlur)

function handleBlur(event) {
    const name = event.target.value;
    alert(`Hello ${name}!`)
}
