/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const DELAY = 3000;
const notification = document.querySelector(".js-alert");
notification.addEventListener("click", handleClick);
let timerId = null;

showNotification();

function handleClick() {
    hideNotification();
    clearTimeout(timerId);
}

function showNotification() {
    notification.classList.add("is-visible");

    timerId = setTimeout(() => {
        console.log("timer");
        hideNotification();
    }, DELAY)
}

function hideNotification() {
    notification.classList.remove("is-visible");
}














