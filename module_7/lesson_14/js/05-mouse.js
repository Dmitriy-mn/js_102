/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */


const box = document.querySelector(".js-box");

box.addEventListener("mouseover", onMouseEnter);
box.addEventListener("mouseout", onMouseLeave);
box.addEventListener("mousemove", onMouseMove)



function onMouseEnter(event) {
    const boxEl = event.currentTarget;
    boxEl.classList.add("box--active");
}

function onMouseLeave(event) {
    const boxEl = event.currentTarget;
    boxEl.classList.remove("box--active");
}

function onMouseMove(event) {
    console.log(event);
}