/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */


const form = document.querySelector(".js-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password, comment } = event.target.elements;
    
    const info = {
        email: email.value,
        password: password.value,
        comment: comment.value
    }

    console.log(info);

    event.target.reset();
}