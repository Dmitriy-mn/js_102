/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */


// document.addEventListener("keydown", handlePress)


// function handlePress(event) {
//     if(event.code === 'Escape') {
//         console.log("Press Escape");
//     } else {
//         console.log("Ooops!");
//     }
// }



/**
 * Обробка комбінацій клавіш
 */

document.addEventListener("keydown", handlePress)

function handlePress(event) {
    if(event.ctrlKey && event.code === "KeyC") {
        event.preventDefault();
        console.log("ok");
    }
}
