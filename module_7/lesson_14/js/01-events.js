/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const btn = document.querySelector(".js-click");
const box = document.querySelector(".js-box");

btn.addEventListener("click", handleClick);
box.addEventListener("click", handleClick)

let step = 0;

function handleClick() {
    step += 50;
    box.style.marginTop = `${step}px`;
    box.style.marginLeft = `${step}px`;
}