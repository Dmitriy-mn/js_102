/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

// class Timer {
//     constructor({ onTick }) {
//         this.onTick = onTick;
//         this.isActive = false;
//         this.intervalId = null;

//         this.init();
//     }

//     init() {
//         const time = this.getTime(0);
//         this.onTick(time);
//     }

//     start() {
//         if(this.isActive) {
//             return;
//         }

//         this.isActive = true;
//         const startTime = Date.now();

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const delatTime = currentTime - startTime;
//             const time = this.getTime(delatTime);
            
//             this.onTick(time);
//         }, 1000)
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         const time = this.getTime(0);
//         this.onTick(time);
//     }

//     getTime(time) {
//         const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

//         return { hours, mins, seconds }
//     }

//     pad(value) {
//        return String(value).padStart(2, "0");
//     }
// }


// const timer = new Timer({
//     onTick: updateClockface
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));

// function updateClockface({ hours, mins, seconds }) {
//     clockface.innerHTML = `${hours}:${mins}:${seconds}`;
// }


let isActive = false;
let intervalId = null;

init();

function stop() {
    clearInterval(intervalId);
    isActive = false;
    const time = getTime(0);
    updateClockface(time);
}

function start() {
    if(isActive) {
        return;
    }

    isActive = true;
    const startTime = Date.now();

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const delatTime = currentTime - startTime;
        const time = getTime(delatTime);
        
        updateClockface(time);
    }, 1000)
}

function getTime(time) {
    const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    return { hours, mins, seconds }
}

function pad(value) {
    return String(value).padStart(2, "0");
}

function init() {
    const time = getTime(0);
    updateClockface(time);
}


startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);


function updateClockface({ hours, mins, seconds }) {
    clockface.innerHTML = `${hours}:${mins}:${seconds}`;
}